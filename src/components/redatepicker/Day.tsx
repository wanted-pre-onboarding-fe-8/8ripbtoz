import React from 'react';
import { ISchedule } from '../../types';
import { format, isPast, isSameDay, isToday, isWithinInterval } from 'date-fns';
import styled from 'styled-components';

interface DayProps {
  day: Date;
  checkInAndOut: ISchedule;
  onClickDate: (day: Date) => void;
}

function Day({ day, checkInAndOut: { checkIn, checkOut }, onClickDate }: DayProps) {
  const dayText = format(day, 'd');

  if (isToday(day)) {
    return isSameDay(day, checkIn) ? (
      <CheckInContainer>
        <CheckDay>{dayText}</CheckDay>
      </CheckInContainer>
    ) : (
      <Today onClick={() => onClickDate(day)}>
        {dayText}
        <RedDot />
      </Today>
    );
  }

  if (isPast(day)) {
    return <PastDay>{dayText}</PastDay>;
  }

  if (isSameDay(day, checkIn)) {
    return checkOut ? (
      <CheckInContainer>
        <CheckDay>{dayText}</CheckDay>
      </CheckInContainer>
    ) : (
      <CheckDay>{dayText}</CheckDay>
    );
  }

  if (checkOut && isSameDay(day, checkOut)) {
    return (
      <CheckOutContainer>
        <CheckDay>{dayText}</CheckDay>
      </CheckOutContainer>
    );
  }

  const isReservedDay =
    checkOut &&
    isWithinInterval(day, { start: checkIn, end: checkOut }) &&
    !isSameDay(day, checkIn) &&
    !isSameDay(day, checkOut);
  if (isReservedDay) {
    return <ReservedDay onClick={() => onClickDate(day)}>{dayText}</ReservedDay>;
  }

  return <ReservableDay onClick={() => onClickDate(day)}>{dayText}</ReservableDay>;
}

export default Day;

const Container = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CheckDay = styled(Container)`
  background-color: #ff375c;
  color: #fff;
  border-radius: 100%;
`;

const CheckInContainer = styled.div`
  background-image: linear-gradient(to right, rgb(255, 255, 255) 50%, rgba(255, 55, 92, 0.2) 50%);
`;

const CheckOutContainer = styled.div`
  background-image: linear-gradient(to right, rgba(255, 55, 92, 0.2) 50%, rgb(255, 255, 255) 50%);
`;

const ReservedDay = styled(Container)`
  background-color: #ff375c33;
  cursor: pointer;
`;

const PastDay = styled(Container)`
  color: #b8b8b8;
  cursor: not-allowed;
`;

const ReservableDay = styled(Container)`
  cursor: pointer;
`;

const Today = styled(Container)`
  position: relative;
`;

const RedDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #ff375c;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translate(-50%, 0);
`;
