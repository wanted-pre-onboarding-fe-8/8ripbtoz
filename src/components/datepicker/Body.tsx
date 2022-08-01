import React from 'react';
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

interface BodyProps {
  today: Date;
}

function Body({ today }: BodyProps) {
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
            <Day key={day.toDateString()}>{day.getDate()}</Day>
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
