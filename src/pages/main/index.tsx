import React from 'react';
import styled from 'styled-components';
import Search from './search';
import { getHotels } from '../../queries/hotel';

export default function Main() {
  const [payload, setPayload] = React.useState({ hotelName: '', max: 0 });
  const { data: hotels, isLoading } = getHotels(payload);

  if (hotels === undefined) {
    return <></>;
  }

  return (
    <Wrapper>
      <Search />
      <>
        {isLoading
          ? ''
          : hotels.map((hotel) => {
              console.log(hotel);
            })}
      </>
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
