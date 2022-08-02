import React from 'react';
import styled from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { usePopup, Popup } from './Popup';

export default function Count() {
  const { isOpen, open, close } = usePopup();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <PermIdentityOutlinedIcon fontSize='large' />
        <CountWrapper>
          <CountTitle>객실 / 인원</CountTitle>
          <CountValue>객실 1, 인원 2</CountValue>
        </CountWrapper>
      </Contents>
      <Popup isOpen={isOpen} close={close}>
        <PopupTest>hello</PopupTest>
      </Popup>
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

const PopupTest = styled.div`
  background-color: lightcoral;
  width: 300px;
  height: 300px;
`;
