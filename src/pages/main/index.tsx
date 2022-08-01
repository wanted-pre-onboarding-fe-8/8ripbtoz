import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return <div>메인페이지입니다.</div>;
}

const CardContainer = styled.div`
  max-width: 976px;
  margin: 0 auto;
  background-color: #ededed;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
  place-items: center center;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
