import React from 'react';
import {
  eachWeekOfInterval,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  eachDayOfInterval,
  isBefore,
  isAfter,
  isToday,
  isSameDay,
} from 'date-fns';
import styled from 'styled-components';

interface BodyProps {
  today: Date;
  checkInAndOut: {
    checkIn: Date;
    checkOut: Date;
  };
}

function Body({ today, checkInAndOut }: BodyProps) {
  const { checkIn, checkOut } = checkInAndOut;

  const startDatesOfWeeks = eachWeekOfInterval({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });

  const isOutOfRange = (date: Date) =>
    isBefore(date, startOfMonth(today)) || isAfter(date, endOfMonth(today));

  return (
    <Container>
      {startDatesOfWeeks.map((startDateOfWeek) => {
        const endDateOfWeek = endOfWeek(startDateOfWeek);
        const days = eachDayOfInterval({
          start: startDateOfWeek,
          end: endDateOfWeek,
        });
        const daysOfWeek = days.map((day) => {
          return isOutOfRange(day) ? (
            <Day key={day.toDateString()} date={day} check={{ checkIn, checkOut }}></Day>
          ) : (
            <Day key={day.toDateString()} date={day} check={{ checkIn, checkOut }}>
              <CheckInAndOutHighlight date={day} check={{ checkIn, checkOut }}>
                <DayText>{day.getDate()}</DayText>
              </CheckInAndOutHighlight>
              <TodayHighlight date={day} />
            </Day>
          );
        });

        return <DaysOfTheWeek key={startDateOfWeek.toDateString()}>{daysOfWeek}</DaysOfTheWeek>;
      })}
    </Container>
  );
}

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DaysOfTheWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface DayProps {
  date: Date;
  check: {
    checkIn: Date;
    checkOut: Date;
  };
}
const Day = styled.div<DayProps>`
  ${({ date, check }) => {
    const commonStyle = `
      flex: 1;
      text-align: center;
      position: relative;
    `;
    const { checkIn, checkOut } = check;
    const isCheckIn = isSameDay(date, checkIn);
    const isCheckOut = isSameDay(date, checkOut);
    const isDuringRange = isBefore(date, checkOut) && isAfter(date, checkIn);

    if (isCheckIn) {
      return `
        ${commonStyle}
        background-image: linear-gradient(to right, rgb(255, 255, 255) 50%, rgba(255, 55, 92, 0.2) 50%);
      `;
    }

    if (isCheckOut) {
      return `
        ${commonStyle}
        background-image: linear-gradient(to right, rgba(255, 55, 92, 0.2) 50%, rgb(255, 255, 255) 50%);
      `;
    }

    if (isDuringRange) {
      return `
        ${commonStyle}
        background-image: linear-gradient(to right, rgba(255, 55, 92, 0.2) 50%, rgba(255, 55, 92, 0.2) 50%);
      `;
    }

    return `
      ${commonStyle}
    `;
  }}
`;

interface CheckInAndOutHighlightProps {
  date: Date;
  check: {
    checkIn: Date;
    checkOut: Date;
  };
}
const CheckInAndOutHighlight = styled.div<CheckInAndOutHighlightProps>`
  ${({ date, check }) => {
    const { checkIn, checkOut } = check;
    const isTargetDate = isSameDay(date, checkIn) || isSameDay(date, checkOut);
    const commonStyle = `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      margin: 0 auto;
    `;
    if (isTargetDate) {
      return (
        commonStyle +
        `
        background-color: #ff375c;
        color: #fff;
        border-radius: 100%;
      `
      );
    } else {
      return (
        commonStyle +
        `
        background-color: transparent;
      `
      );
    }
  }}
`;

const DayText = styled.span``;
interface TodayHighlightProps {
  date: Date;
}
const TodayHighlight = styled.span<TodayHighlightProps>`
  display: ${({ date }) => (isToday(date) ? 'block' : 'none')};
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: #ff375c;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
