import React from 'react';
import Header from './Header';
import Weekdays from './Weekdays';
import Body from './Body';
import styled from 'styled-components';

function Datepicker() {
  const today = new Date();

  return (
    <Container>
      <Header today={today} />
      <Weekdays />
      <Body today={today} />
    </Container>
  );
}

export default Datepicker;

const Container = styled.section`
  max-width: 340px;
  margin: 0 auto;
  padding: 24px;
`;
