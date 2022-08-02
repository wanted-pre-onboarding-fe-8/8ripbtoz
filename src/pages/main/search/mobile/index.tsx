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
  align-items: center;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;
