import React from 'react';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import { addDays, addMonths, isSameMonth } from 'date-fns';
import Header from './Header';
import Weekdays from './Weekdays';
import Body from './Body';
import styled from 'styled-components';

function Datepicker() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = React.useState(today);
  const maxMonth = addMonths(today, RESERVATION_MONTH_LIMIT);
  const [isChevronActive, setIsChevronActive] = React.useState({
    prev: false,
    next: true,
  });

  const [checkInAndOut, setCheckInAndOut] = React.useState({
    checkIn: addDays(today, 7),
    checkOut: addDays(today, 8),
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

  return (
    <Container>
      <Header
        currentMonth={currentMonth}
        isActive={isChevronActive}
        onClickPrevMonth={handleClickPrevMonth}
        onClickNextMonth={handleClickNextMonth}
      />
      <Weekdays />
      <Body today={today} checkInAndOut={checkInAndOut} />
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  max-width: 340px;
  margin: 0 auto;
  padding: 24px;
`;
