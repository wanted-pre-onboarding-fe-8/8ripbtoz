import React from 'react';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import { ISchedule } from '../../types';
import { addMonths, isSameMonth, isBefore } from 'date-fns';
import Header from './Header';
import Weekdays from './Weekdays';
import Body from './Body';
import styled from 'styled-components';

interface DatepickerProps {
  checkInAndOut: ISchedule;
  onChangeDate: (checkInAndOut: ISchedule) => void;
}

function Datepicker({ checkInAndOut, onChangeDate }: DatepickerProps) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = React.useState(today);
  const maxMonth = addMonths(today, RESERVATION_MONTH_LIMIT);
  const [isChevronActive, setIsChevronActive] = React.useState({
    prev: false,
    next: true,
  });

  // const [checkInAndOut, setCheckInAndOut] = React.useState<CheckInAndOut>({
  //   checkIn: addDays(today, 7),
  //   checkOut: addDays(today, 8),
  // });

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
      <Header
        currentMonth={currentMonth}
        isActive={isChevronActive}
        onClickPrevMonth={handleClickPrevMonth}
        onClickNextMonth={handleClickNextMonth}
      />
      <Weekdays />
      <Body month={currentMonth} checkInAndOut={checkInAndOut} onClickDate={handleClickDate} />
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  max-width: 340px;
  margin: 0 auto;
  padding: 24px;
`;
