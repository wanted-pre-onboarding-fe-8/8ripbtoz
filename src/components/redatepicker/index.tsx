import React from 'react';
import { ISchedule } from '../../types';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import { addMonths, eachMonthOfInterval } from 'date-fns';
import styled from 'styled-components';
import Calendar from './Calendar';

interface DatepickerProps {
  checkInAndOut: ISchedule;
  onChangeDate: (checkInAndOut: ISchedule) => void;
}

function Datepicker({ checkInAndOut, onChangeDate }: DatepickerProps) {
  const today = new Date();

  const MONTH_RANGE = {
    start: today,
    end: addMonths(today, RESERVATION_MONTH_LIMIT),
  };

  return (
    <Container>
      {eachMonthOfInterval(MONTH_RANGE).map((month) => {
        return (
          <Calendar
            key={month.toString()}
            month={month}
            checkInAndOut={checkInAndOut}
            onChangeDate={onChangeDate}
          />
        );
      })}
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
  top: 0;
  /* left: -282px; */
  padding: 46px;
  width: 810px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
`;
