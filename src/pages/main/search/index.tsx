import React from 'react';
import styled from 'styled-components';
import Count from './Count';
import Schedule from './Schedule';
import Text from './Text';

export default function Search() {
  return (
    <Wrapper>
      <Text />
      <Schedule />
      <Count />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 976px;
`;
