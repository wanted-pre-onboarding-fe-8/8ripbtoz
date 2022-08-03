import React from 'react';
import styled from 'styled-components';
import useScheduleState from '../../../../hooks/useScheduleState';
import { usePopup, Popup } from '../Popup';

export default function Schedule() {
  const { isOpen, open, close } = usePopup();
  const { checkInFullString, checkOutFullString, onChange } = useScheduleState();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <DateText>{checkInFullString}</DateText>
        <DateText>{checkOutFullString}</DateText>
      </Contents>
      <Popup top={0} left={0} isOpen={isOpen} close={close}>
        <PopupTest>달력</PopupTest>
      </Popup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const Contents = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  cursor: pointer;
`;

const DateText = styled.p`
  font-size: 3vw;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

const PopupTest = styled.div`
  background-color: lightcoral;
  width: 100vw;
  height: 100vh;
`;
