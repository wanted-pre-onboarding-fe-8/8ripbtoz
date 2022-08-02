/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { format } from 'date-fns';
import styled from 'styled-components';

interface HeaderProps {
  currentMonth: Date;
  isActive: {
    prev: boolean;
    next: boolean;
  };
  onClickPrevMonth: () => void;
  onClickNextMonth: () => void;
}

function Header({ currentMonth, isActive, onClickPrevMonth, onClickNextMonth }: HeaderProps) {
  const { prev, next } = isActive;
  return (
    <Container>
      <ChevronLeftIcon active={prev} onClick={onClickPrevMonth} />
      <YearAndMonth>{format(currentMonth, 'yyyy년 M월')}</YearAndMonth>
      <ChevronRightIcon active={next} onClick={onClickNextMonth} />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const YearAndMonth = styled.span``;

const ChevronLeftIcon = styled(({ active, ...parentProps }) => <ChevronLeft {...parentProps} />)<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? '#000' : '#ccc')};
  cursor: pointer;
`;

const ChevronRightIcon = styled(({ active, ...parentProps }) => <ChevronRight {...parentProps} />)<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? '#000' : '#ccc')};
  cursor: pointer;
`;
