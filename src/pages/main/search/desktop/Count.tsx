import React from 'react';
import styled from 'styled-components';
import useGuestCountState from '../../../../hooks/useGuestCountState';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GuestSelect from '../../../../components/guestselect/GuestSelect';
import { usePopup, Popup } from '../Popup';

export default function Count() {
  const { isOpen, open, close } = usePopup();
  const { adult, child, total, onChange } = useGuestCountState();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <PermIdentityOutlinedIcon fontSize='large' />
        <CountWrapper>
          <CountTitle>객실 / 인원</CountTitle>
          <CountValue>{`객실 1, 인원 ${total}`}</CountValue>
        </CountWrapper>
      </Contents>
      {isOpen && (
        <Popup top={60} left={0} close={close}>
          <GuestSelect adult={adult} child={child} onChange={onChange} close={close} />
        </Popup>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  flex: 0.6;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #eeeeee;
    * {
      background-color: #eeeeee;
    }
  }
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const CountTitle = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  color: #bdbfc3;
`;

const CountValue = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
