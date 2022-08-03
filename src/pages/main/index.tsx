import React from 'react';
import styled from 'styled-components';
import Search from './search';
import { ISearchPayload } from '../../types';
import { getHotels } from '../../queries/hotel';

export default function Main() {
  const [payload, setPayload] = React.useState<ISearchPayload>({ hotelName: '', max: 0 });
  // const { data: hotels, isLoading } = getHotels(payload);

  return (
    <Wrapper>
      <Search setPayload={setPayload} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

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
