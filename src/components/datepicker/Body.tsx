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
              <DayText>{day.getDate()}</DayText>
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
  position: relative;
`;
const DayText = styled.span``;
interface TodayHighlightProps {
  date: Date;
}
const TodayHighlight = styled.span<TodayHighlightProps>`
  display: ${({ date }) => (isToday(date) ? 'block' : 'none')};
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
