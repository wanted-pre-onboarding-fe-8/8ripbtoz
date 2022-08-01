import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { format } from 'date-fns';
import styled from 'styled-components';

interface HeaderProps {
  today: Date;
}

function Header({ today }: HeaderProps) {
  return (
    <Container>
      <ChevronLeft />
      <YearAndMonth>{format(today, 'yyyy년 M월')}</YearAndMonth>
      <ChevronRight />
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
