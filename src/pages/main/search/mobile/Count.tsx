import React from 'react';
import styled from 'styled-components';
import useGuestCountState from '../../../../hooks/useGuestCountState';
import FullSizePopup from '../../../../components/FullSizePopup';
import { usePopup, Popup } from '../Popup';
import { HEIGHT } from '../../../../utils/constants/header';
import GuestSelect from '../../../../components/guestselect/GuestSelect';

export default function Count() {
  const { isOpen, open, close } = usePopup();
  const { adult, child, total, onChange } = useGuestCountState();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <CountWrapper>
          <CountTitle>객실</CountTitle>
          <CountValue>1</CountValue>
        </CountWrapper>
        <CountWrapper>
          <CountTitle>인원</CountTitle>
          <CountValue>{total}</CountValue>
        </CountWrapper>
      </Contents>
      {isOpen && (
        <Popup top={-HEIGHT} left={0} close={close}>
          <FullSizePopup title='인원 및 객실' close={close}>
            <p>인원 및 객실</p>
          </FullSizePopup>
        </Popup>
      )}
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
