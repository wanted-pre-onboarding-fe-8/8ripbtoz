import React from 'react';
import { ISchedule } from '../../types';
import Weekdays from './Weekdays';
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
  format,
} from 'date-fns';
import styled from 'styled-components';

interface CalendarProps {
  order: 'left' | 'right';
  month: Date;
  checkInAndOut: ISchedule;
  onClickDate: (date: Date) => void;
}

function Calendar({ order, month, checkInAndOut, onClickDate }: CalendarProps) {
  const { checkIn, checkOut } = checkInAndOut;

  const startDatesOfWeeks = eachWeekOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  });

  const isOutOfRange = (date: Date) =>
    isBefore(date, startOfMonth(month)) || isAfter(date, endOfMonth(month));
  return (
    <Container order={order}>
      <MonthDisplay>{format(month, 'yyyy년 M월')}</MonthDisplay>
      <DateDisplay>
        <Weekdays />
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
                <CheckInAndOutHighlight
                  date={day}
                  check={{ checkIn, checkOut }}
                  onClick={() => onClickDate(day)}
                >
                  <DayText>{day.getDate()}</DayText>
                </CheckInAndOutHighlight>
                <TodayHighlight date={day} />
              </Day>
            );
          });

          return <DaysOfTheWeek key={startDateOfWeek.toDateString()}>{daysOfWeek}</DaysOfTheWeek>;
        })}
      </DateDisplay>
    </Container>
  );
}

export default Calendar;

interface ContainerProps {
  order: 'left' | 'right';
}
const Container = styled.div<ContainerProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  ${({ order }) => (order === 'left' ? 'padding-right: 12px;' : 'padding-left: 12px;')}
`;

const MonthDisplay = styled.span`
  font-size: 16px;
  height: 24px;
`;

const DateDisplay = styled.section`
  width: 100%;
`;

const DaysOfTheWeek = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface DayProps {
  date: Date;
  check: ISchedule;
}
const Day = styled.div<DayProps>`
  ${({ date, check }) => {
    const { checkIn, checkOut } = check;
    const commonStyle = `
      flex: 1;
      text-align: center;
      position: relative;
    `;

    if (checkIn && checkOut) {
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
    }

    return `
      ${commonStyle}
    `;
  }}
`;

interface CheckInAndOutHighlightProps {
  date: Date;
  check: ISchedule;
}
const CheckInAndOutHighlight = styled.div<CheckInAndOutHighlightProps>`
  ${({ date, check }) => {
    const { checkIn, checkOut } = check;
    const commonStyle = `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      margin: 0 auto;
    `;

    if (checkIn) {
      const isTargetDate = isSameDay(date, checkIn);

      if (isTargetDate) {
        return (
          commonStyle +
          `
        background-color: #ff375c;
        color: #fff;
        border-radius: 100%;
      `
        );
      }
    }

    if (checkOut) {
      const isTargetDate = isSameDay(date, checkOut);

      if (isTargetDate) {
        return (
          commonStyle +
          `
        background-color: #ff375c;
        color: #fff;
        border-radius: 100%;
      `
        );
      }
    }

    return (
      commonStyle +
      `
        background-color: transparent;
      `
    );
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
