import React from 'react';
import GridCard from './GridCard';
import styled from 'styled-components';

const skeletonRepeatCount = Array(10).fill(0);

function CardSkeleton() {
  return (
    <Container sx={{ boxShadow: 'rgb(94 94 94 / 10%) 0px 2px 4px 0px' }}>
      <Empty />
      <Empty />
      <Empty />
    </Container>
  );
}

function Skeleton() {
  return (
    <>
      {skeletonRepeatCount.map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </>
  );
}

export default Skeleton;

const Container = styled(GridCard)`
  & > * {
    :first-child {
      grid-area: image;
      height: 80%;
    }
    :nth-child(2) {
      grid-area: title;
      height: 50%;
      width: calc(100% - 10px);
      margin-left: 10px;
    }
    :nth-child(3) {
      ::before {
        content: '예약';
        font-size: 16px;
        visibility: hidden;
      }
      grid-area: button;
      height: 50%;
      width: fit-content;
      justify-self: right;
      padding: 5% 10%;
    }
  }
`;

const Empty = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #ededed;
`;
