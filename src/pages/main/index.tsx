import React, { useEffect } from 'react';
import styled from 'styled-components';
import Search from './search';
import { IHotel, ISearchPayload } from '../../types';
import { HEIGHT } from '../../utils/constants/header';
import { getInfiniteScroll } from '../../queries/hotel';
import { useInView } from 'react-intersection-observer';
import useScheduleValue from '../../hooks/useScheduleValue';
import useScrollDirection from '../../hooks/useScrollDirection';
import { Card, Skeleton } from './card';
import { CardContainer } from './card/CardLayouts';

export default function Main() {
  const [payload, setPayload] = React.useState<ISearchPayload>({ hotelName: '', max: 0 });
  const { checkInString, checkOutString } = useScheduleValue();
  const { ref, inView } = useInView();
  const { data, refetch, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    getInfiniteScroll(payload);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching]);

  const isDown = useScrollDirection();

  const checkEmptyResult = (pageParam: (number | undefined)[], dataLength: number) => {
    if (!pageParam && dataLength === 0) return true;
    return false;
  };

  return (
    <Wrapper>
      <SearchWrapper isDown={isDown}>
        <Search setPayload={setPayload} />
      </SearchWrapper>

      {data?.pages.map((page, idx) => (
        <React.Fragment key={idx}>
          {!isFetching && checkEmptyResult(page.pageParam, page?.data.length) && (
            <div>검색 결과가 없습니다</div>
          )}
          <CardContainer key={page?.pageParam + idx}>
            {page?.data.map((hotel: IHotel) => (
              <Card
                key={hotel.id}
                {...hotel}
                checkIn={checkInString}
                checkOut={checkOutString}
                refetch={refetch}
              />
            ))}
          </CardContainer>
        </React.Fragment>
      ))}
      {isFetching && <Skeleton />}

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
  gap: 20px;
`;

const SearchWrapper = styled.div<{ isDown: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: ${`${HEIGHT}px`};
  background-color: white;
  z-index: 2;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 20px;
  transition: transform 1s;
  transform: translateY(${({ isDown }) => (isDown ? `${-HEIGHT * 2}px` : '0px')});
`;
