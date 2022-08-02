import React from 'react';
import styled from 'styled-components';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { usePopup, Popup } from '../Popup';

export default function Schedule() {
  const { isOpen, open, close } = usePopup();

  return (
    <Wrapper onMouseDown={open}>
      <Contents>
        <CalendarMonthOutlinedIcon fontSize='large' />
        <DateWrapper>
          <CheckWrapper>
            <CheckTitle align={ALIGN_START}>체크인</CheckTitle>
            <CheckDate>8월 10일</CheckDate>
          </CheckWrapper>
          <SleepCountWrapper>1박</SleepCountWrapper>
          <CheckWrapper>
            <CheckTitle align={ALIGN_END}>체크아웃</CheckTitle>
            <CheckDate>8월 11일</CheckDate>
          </CheckWrapper>
        </DateWrapper>
      </Contents>
      <Popup top={60} left={0} isOpen={isOpen} close={close}>
        <PopupTest>달력</PopupTest>
      </Popup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  border-left: 1px solid #cdcdcd;
  border-right: 1px solid #cdcdcd;
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

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  margin-right: 5px;
`;

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ALIGN_START = 'start';
const ALIGN_END = 'end';
const CheckTitle = styled.p<{ align: typeof ALIGN_START | typeof ALIGN_END }>`
  text-align: ${({ align }) => align};
  font-size: 12px;
  margin-bottom: 10px;
  color: #bdbfc3;
`;

const CheckDate = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const SleepCountWrapper = styled.p`
  font-size: 15px;
`;

const PopupTest = styled.div`
  background-color: lightcoral;
  width: 300px;
  height: 300px;
`;
