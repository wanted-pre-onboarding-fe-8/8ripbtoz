import React from 'react';
import styled from 'styled-components';
import { usePopup, Popup } from '../Popup';

export default function Count() {
  const { isOpen, open, close } = usePopup();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <CountWrapper>
          <CountTitle>객실</CountTitle>
          <CountValue>1</CountValue>
        </CountWrapper>
        <CountWrapper>
          <CountTitle>인원</CountTitle>
          <CountValue>2</CountValue>
        </CountWrapper>
      </Contents>
      <Popup top={0} left={0} isOpen={isOpen} close={close}>
        <PopupTest>인원</PopupTest>
      </Popup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border-left: 1px solid #eeeeee;
`;

const Contents = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  cursor: pointer;
`;

const CountWrapper = styled.div`
  display: flex;
`;

const CountTitle = styled.p`
  font-size: 3vw;
  font-weight: 600;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

const CountValue = styled.p`
  margin-left: 3px;
  font-size: 3vw;
  font-weight: 600;
  color: #ff375c;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

const PopupTest = styled.div`
  background-color: lightcoral;
  width: 100vw;
  height: 100vh;
`;
