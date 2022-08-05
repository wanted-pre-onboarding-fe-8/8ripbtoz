import React from 'react';
import { DISPLAY_WEEKDAYS } from '../../utils/constants/time';
import styled from 'styled-components';

function Weekdays() {
  return (
    <WeekdayRow>
      {DISPLAY_WEEKDAYS.map((weekday) => {
        return <Weekday key={weekday}>{weekday}</Weekday>;
      })}
    </WeekdayRow>
  );
}

export default Weekdays;

const WeekdayRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Weekday = styled.div`
  width: calc(100% / 7);
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;
