/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
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

function Header({ isActive, onClickPrevMonth, onClickNextMonth }: HeaderProps) {
  const { prev, next } = isActive;
  return (
    <Container>
      <ChevronLeftIcon active={prev} onClick={onClickPrevMonth} />
      <ChevronRightIcon active={next} onClick={onClickNextMonth} />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  position: absolute;
  left: 0px;
  padding: 0px 46px;
`;

const ChevronLeftIcon = styled(({ active, ...parentProps }) => <ChevronLeft {...parentProps} />)<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? '#000' : '#ccc')};
  cursor: pointer;
  position: relative;
  float: left;
`;

const ChevronRightIcon = styled(({ active, ...parentProps }) => <ChevronRight {...parentProps} />)<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? '#000' : '#ccc')};
  cursor: pointer;
  position: relative;
  float: right;
`;
