import React from 'react';
import { GridCard, CardContainer } from './CardLayouts';
import styled, { keyframes } from 'styled-components';

const skeletonRepeatCount = Array(10).fill(0);

function CardSkeleton() {
  return (
    <Container>
      <Empty />
      <Empty />
      <Empty />
    </Container>
  );
}

function Skeleton() {
  return (
    <CardContainer>
      {skeletonRepeatCount.map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </CardContainer>
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

const light = keyframes`
to{
    background-position: 670px;
}
`;

const Empty = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #ededed;
  background-image: linear-gradient(90deg, #ededed00, #f7f7f780 30%, #ededed00 60%);
  background-position: 0px;
  background-repeat: repeat-y;
  animation: ${light} 0.5s infinite;
  animation-timing-function: ease-out;
`;
