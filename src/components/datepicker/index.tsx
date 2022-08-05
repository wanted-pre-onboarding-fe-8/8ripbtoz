import React from 'react';
import { ISchedule } from '../../types';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import { addMonths, subMonths, eachMonthOfInterval, isSameMonth } from 'date-fns';
import styled from 'styled-components';
import Navigation from './Navigation';
import Calendar from './Calendar';

interface DatepickerProps {
  checkInAndOut: ISchedule;
  onChangeDate: (checkInAndOut: ISchedule) => void;
}

type NavigationType = 'prev' | 'next';

function Datepicker({ checkInAndOut, onChangeDate }: DatepickerProps) {
  const today = new Date();

  const MONTH_RANGE = {
    start: today,
    end: addMonths(today, RESERVATION_MONTH_LIMIT),
  };

  const [displayBaseMonth, setCurrentMonth] = React.useState(today);

  const handleNavigationClick = (direction: NavigationType) => {
    const navigationActions = {
      prev: () => setCurrentMonth(subMonths(displayBaseMonth, 1)),
      next: () => setCurrentMonth(addMonths(displayBaseMonth, 1)),
    };

    return navigationActions[direction]();
  };

  return (
    <Container>
      <Navigation month={displayBaseMonth} onNavigationClick={handleNavigationClick} />
      <Inner>
        {eachMonthOfInterval(MONTH_RANGE).map((month) => {
          const isDisplayTarget = () => {
            if (isSameMonth(month, displayBaseMonth)) return 'left';
            if (isSameMonth(subMonths(month, 1), displayBaseMonth)) return 'right';
            return 'none';
          };
          return (
            <Calendar
              key={month.toString()}
              isDisplayTarget={isDisplayTarget()}
              month={month}
              checkInAndOut={checkInAndOut}
              onChangeDate={onChangeDate}
            />
          );
        })}
      </Inner>
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  position: absolute;
  top: 0;
  z-index: 2;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
  padding: 36px;
  background-color: #fff;
`;

const Inner = styled.div`
  width: 544px;
  display: flex;
  overflow-x: hidden;
`;
