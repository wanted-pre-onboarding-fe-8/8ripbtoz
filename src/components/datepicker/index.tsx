import React from 'react';
import { ISchedule } from '../../types';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import { addMonths, subMonths, eachMonthOfInterval, isSameMonth } from 'date-fns';
import styled from 'styled-components';
import Navigation from './Navigation';
import Calendar from './Calendar';

interface DatepickerProps {
  checkInAndOut: ISchedule;
  close?: () => void;
  onChangeDate: (checkInAndOut: ISchedule) => void;
}

type NavigationType = 'prev' | 'next';

function Datepicker({ checkInAndOut, close, onChangeDate }: DatepickerProps) {
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

  const handleChooseDateForMobile = () => {
    onChangeDate(checkInAndOut);
    close && close();
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
      <ButtonContainer>
        <ChooseDateButton onClick={handleChooseDateForMobile}>선택</ChooseDateButton>
      </ButtonContainer>
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
  padding: 28px;
  background-color: #fff;
  @media screen and (max-width: 480px) {
    position: static;
    height: calc(100vh - 64px);
    overflow: auto;
  }
`;

const Inner = styled.div`
  width: 544px;
  display: flex;
  overflow-x: hidden;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
const ButtonContainer = styled.div`
  display: none;
  background-color: #fff;
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    position: sticky;
    bottom: 14px;
  }
`;

const ChooseDateButton = styled.button`
  width: 100%;
  background-color: #ff375c;
  font-size: 5vw;
  color: #fff;
  border-radius: 8px;
  padding: 12px;
`;
