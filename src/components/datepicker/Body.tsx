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
            <Day key={day.toDateString()}></Day>
          ) : (
            <Day key={day.toDateString()}>
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

const Day = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  position: relative;
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
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
