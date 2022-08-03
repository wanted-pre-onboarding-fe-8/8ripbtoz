import React from 'react';
import { ISchedule } from '../../types';
import { addMonths } from 'date-fns';
import styled from 'styled-components';
import Calendar from './Calendar';

interface BodyProps {
  month: Date;
  checkInAndOut: ISchedule;
  onClickDate: (date: Date) => void;
}

function Body({ month, checkInAndOut, onClickDate }: BodyProps) {
  const monthLeft = month;
  const monthRight = addMonths(month, 1);
  return (
    <OuterContainer>
      <Calendar month={monthLeft} checkInAndOut={checkInAndOut} onClickDate={onClickDate} />
      <Calendar month={monthRight} checkInAndOut={checkInAndOut} onClickDate={onClickDate} />
    </OuterContainer>
  );
}

export default Body;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
