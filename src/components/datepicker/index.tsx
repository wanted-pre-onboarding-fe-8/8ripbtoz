import React from 'react';
import Header from './Header';
import { DISPLAY_WEEKDAYS } from '../../utils/constants/time';

import {
  eachWeekOfInterval,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  eachDayOfInterval,
  isBefore,
  isAfter,
} from 'date-fns';
import styled from 'styled-components';

function Datepicker() {
  const today = new Date();

  const startDatesOfWeeks = eachWeekOfInterval({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });

  const isOutOfRange = (date: Date) =>
    isBefore(date, startOfMonth(today)) || isAfter(date, endOfMonth(today));

  return (
    <Container>
      <Header today={today} />
      <Weekdays>
        {DISPLAY_WEEKDAYS.map((day) => {
          return <Weekday key={day}>{day}</Weekday>;
        })}
      </Weekdays>
      <Days>
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
              <Day key={day.toDateString()}>{day.getDate()}</Day>
            );
          });

          return <DaysOfTheWeek key={startDateOfWeek.toDateString()}>{daysOfWeek}</DaysOfTheWeek>;
        })}
      </Days>
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  max-width: 340px;
  margin: 0 auto;
  padding: 24px;
`;

const Weekdays = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;
const Weekday = styled.div`
  width: 32px;
  text-align: center;
`;

const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const DaysOfTheWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Day = styled.div`
  width: 32px;
  text-align: center;
`;
