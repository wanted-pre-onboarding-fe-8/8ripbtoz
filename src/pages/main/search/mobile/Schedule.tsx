import React from 'react';
import styled from 'styled-components';
import useScheduleState from '../../../../hooks/useScheduleState';
import FullSizePopup from '../../../../components/FullSizePopup';
import { usePopup, Popup } from '../Popup';
import { HEIGHT } from '../../../../utils/constants/header';
import Datepicker from '../../../../components/datepicker';

export default function Schedule() {
  const { isOpen, open, close } = usePopup();
  const { checkInFullString, checkOutFullString, checkIn, checkOut, onChange } = useScheduleState();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <DateText>{checkInFullString}</DateText>
        <DateText>{checkOutFullString}</DateText>
      </Contents>
      {isOpen && (
        <Popup top={-HEIGHT} left={0} close={close}>
          <FullSizePopup title='일정' close={close}>
            <Datepicker
              checkInAndOut={{ checkIn, checkOut }}
              onChangeDate={onChange}
              close={close}
            />
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
