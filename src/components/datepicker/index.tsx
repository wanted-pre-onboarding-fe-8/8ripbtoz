import React from 'react';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import { ISchedule } from '../../types';
import { addMonths, isSameMonth, isBefore } from 'date-fns';
import Navigation from './Navigation';
import Calendar from './Calendar';
import styled from 'styled-components';

interface DatepickerProps {
  checkInAndOut: ISchedule;
  onChangeDate: (checkInAndOut: ISchedule) => void;
}

function Datepicker({ checkInAndOut, onChangeDate }: DatepickerProps) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = React.useState(today);
  const monthLeft = currentMonth;
  const monthRight = addMonths(currentMonth, 1);
  const maxMonth = addMonths(today, RESERVATION_MONTH_LIMIT);
  const [isChevronActive, setIsChevronActive] = React.useState({
    prev: false,
    next: true,
  });

  React.useEffect(() => {
    const setActivation = (date: Date) => {
      const activation = {
        prev: !isSameMonth(today, date),
        next: !isSameMonth(maxMonth, date),
      };

      setIsChevronActive(activation);
    };

    setActivation(currentMonth);
  }, [currentMonth]);

  const handleClickPrevMonth = () => {
    const isEarliestMonth = (date: Date) => {
      return isSameMonth(date, today);
    };

    if (isEarliestMonth(currentMonth)) {
      return;
    }

    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const handleClickNextMonth = () => {
    const isMaxMonth = (date: Date) => {
      return isSameMonth(date, maxMonth);
    };

    if (isMaxMonth(currentMonth)) {
      return;
    }

    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleClickDate = (date: Date) => {
    const { checkIn, checkOut } = checkInAndOut;
    const isAnotherDay = checkIn && checkOut;
    const isCheckOutEmpty = !checkOut;
    const isNewDayBeforeCheckIn = checkIn && isBefore(date, checkIn);

    const setNewCheckIn = () =>
      onChangeDate({
        checkIn: date,
        checkOut: null,
      });

    const setNewCheckOut = () =>
      onChangeDate({
        ...checkInAndOut,
        checkOut: date,
      });

    if (isAnotherDay) {
      setNewCheckIn();
    }

    if (isCheckOutEmpty) {
      setNewCheckOut();
    }

    if (isNewDayBeforeCheckIn) {
      setNewCheckIn();
    }
  };

  return (
    <Container>
      <Navigation
        currentMonth={currentMonth}
        isActive={isChevronActive}
        onClickPrevMonth={handleClickPrevMonth}
        onClickNextMonth={handleClickNextMonth}
      />
      <Calendar
        order={'left'}
        month={monthLeft}
        checkInAndOut={checkInAndOut}
        onClickDate={handleClickDate}
      />
      <Calendar
        order={'right'}
        month={monthRight}
        checkInAndOut={checkInAndOut}
        onClickDate={handleClickDate}
      />
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
  top: 12px;
  left: -282px;
  padding: 46px;
  width: 810px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
`;
