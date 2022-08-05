import React from 'react';
import { isSameMonth, addMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { RESERVATION_MONTH_LIMIT } from '../../utils/constants/time';
import styled from 'styled-components';

interface NavigationProps {
  month: Date;
  onNavigationClick: (direction: 'prev' | 'next') => void;
}

function Navigation({ month, onNavigationClick }: NavigationProps) {
  const today = new Date();

  const isEarliestMonth = isSameMonth(month, today);
  if (isEarliestMonth) {
    return (
      <Container>
        <InactiveIcon>
          <PrevIcon />
        </InactiveIcon>
        <NextIcon onClick={() => onNavigationClick('next')} />
      </Container>
    );
  }

  const weDisplayTwoCalendars = addMonths(today, RESERVATION_MONTH_LIMIT - 1);
  const isFurthestMonth = isSameMonth(month, weDisplayTwoCalendars);
  if (isFurthestMonth) {
    return (
      <Container>
        <PrevIcon onClick={() => onNavigationClick('prev')} />
        <InactiveIcon>
          <NextIcon />
        </InactiveIcon>
      </Container>
    );
  }

  return (
    <Container>
      <PrevIcon onClick={() => onNavigationClick('prev')} />
      <NextIcon onClick={() => onNavigationClick('next')} />
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0px;
  padding: 0px 48px;
`;
const PrevIcon = styled(ChevronLeft)`
  cursor: pointer;
  position: relative;
  float: left;
  top: 19px;
  left: 28px;
`;
const NextIcon = styled(ChevronRight)`
  cursor: pointer;
  position: relative;
  float: right;
  top: 19px;
  right: 28px;
`;
const InactiveIcon = styled.span`
  color: #ccc;
`;
