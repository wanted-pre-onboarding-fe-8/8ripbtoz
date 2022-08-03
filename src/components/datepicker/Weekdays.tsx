import React from 'react';
import { DISPLAY_WEEKDAYS } from '../../utils/constants/time';
import styled from 'styled-components';

function Weekdays() {
  return (
    <Container>
      {DISPLAY_WEEKDAYS.map((day) => {
        return <Weekday key={day}>{day}</Weekday>;
      })}
    </Container>
  );
}

export default Weekdays;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Weekday = styled.div`
  width: 32px;
  text-align: center;
`;
