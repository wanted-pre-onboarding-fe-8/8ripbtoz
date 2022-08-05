import React from 'react';
import { ISchedule } from '../../types';
import {
  format,
  eachWeekOfInterval,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addDays,
  isSameMonth,
  isBefore,
} from 'date-fns';
import styled from 'styled-components';
import Weekdays from './Weekdays';
import Day from './Day';

interface CalendarProps {
  month: Date;
  isDisplayTarget: 'left' | 'right' | 'none';
  checkInAndOut: ISchedule;
  onChangeDate: (checkInAndOut: ISchedule) => void;
}

function Calendar({ month, isDisplayTarget, checkInAndOut, onChangeDate }: CalendarProps) {
  const sundaysOfTheMonth = eachWeekOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  });

  const daysOfTheWeek = (sunday: Date) =>
    eachDayOfInterval({
      start: sunday,
      end: addDays(sunday, 6),
    });

  const handleClickDate = (date: Date) => {
    const { checkIn, checkOut } = checkInAndOut;

    const setNewCheckIn = (newDate: Date) => {
      onChangeDate({
        checkIn: newDate,
        checkOut: null,
      });
    };

    const setNewCheckOut = (newDate: Date) => {
      onChangeDate({
        ...checkInAndOut,
        checkOut: newDate,
      });
    };

    const isNewCheckIn = checkIn && checkOut;
    if (isNewCheckIn) {
      setNewCheckIn(date);
    }

    const isNewCheckOut = checkIn && !checkOut;
    if (isNewCheckOut) {
      setNewCheckOut(date);
    }

    const isBeforeCheckIn = isBefore(date, checkIn);
    if (isBeforeCheckIn) {
      setNewCheckIn(date);
    }
  };

  return (
    <Container isDisplayTarget={isDisplayTarget}>
      <YearAndMonth>{format(month, 'yyyy년 M월')}</YearAndMonth>
      <Weekdays />
      <DateSection>
        {sundaysOfTheMonth.map((sunday) => {
          return (
            <Week key={sunday.toString()}>
              {daysOfTheWeek(sunday).map((day) => {
                return isSameMonth(day, month) ? (
                  <Day
                    key={day.toString()}
                    day={day}
                    checkInAndOut={checkInAndOut}
                    onClickDate={handleClickDate}
                  ></Day>
                ) : (
                  <EmptyDay key={day.toString()}></EmptyDay>
                );
              })}
            </Week>
          );
        })}
      </DateSection>
    </Container>
  );
}

export default Calendar;

interface ContainerProps {
  isDisplayTarget: 'left' | 'right' | 'none';
}
const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 272px;

  ${({ isDisplayTarget }) => {
    if (isDisplayTarget === 'left') {
      return 'order: 1;';
    }
    if (isDisplayTarget === 'right') {
      return 'order: 2;';
    }
    if (isDisplayTarget === 'none') {
      return 'order: 3;';
    }
  }}

  @media screen and (max-width: 480px) {
    width: 100vw;
    aspect-ratio: 1/1;
  }
`;

const YearAndMonth = styled.span`
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const DateSection = styled.section`
  width: 100%;
`;

const Week = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmptyDay = styled.div`
  width: 32px;
  height: 32px;
  @media screen and (max-width: 480px) {
    width: calc(100vw / 7);
    aspect-ratio: 1/1;
    height: unset;
  }
`;
