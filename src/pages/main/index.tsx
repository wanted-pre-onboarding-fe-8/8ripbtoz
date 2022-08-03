import React, { useEffect } from 'react';
import styled from 'styled-components';
import Search from './search';
import { IHotel, ISearchPayload } from '../../types';
import { getInfiniteScroll } from '../../queries/hotel';
import { Card, Skeleton } from './card';
import useScheduleValue from '../../hooks/useScheduleValue';
import { useInView } from 'react-intersection-observer';

export default function Main() {
  const [payload, setPayload] = React.useState<ISearchPayload>({ hotelName: '', max: 0 });
  const { checkInString, checkOutString } = useScheduleValue();
  const { ref, inView } = useInView();
  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    getInfiniteScroll(payload);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Wrapper>
      <Search setPayload={setPayload} />
      <CardContainer>
        {data?.pages.map((page) => (
          <React.Fragment key={page.pageParam}>
            {page.data.map((hotel: IHotel) => (
              <Card key={hotel.id} {...hotel} checkIn={checkInString} checkOut={checkOutString} />
            ))}
          </React.Fragment>
        ))}
        {isFetching && <Skeleton />}
      </CardContainer>
      <div>
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        ></button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  max-width: 976px;
  width: 100%;
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
