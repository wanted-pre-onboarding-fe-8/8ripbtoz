import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { GUEST } from '../../utils/constants/guest';
import { IGuestCount } from '../../types';
import { GuestSelectWrapperTemplate, GuestSelectButtonTemplate } from './GuestTemplate';
import GuestSelectButton from './GuestSelectButton';

interface IGuestSelectProps {
  adult: number;
  child: number;
  onChange: (guestCount: IGuestCount) => void;
  close: () => void;
}
interface IGuestTempCount {
  [key: typeof GUEST.ADULT | typeof GUEST.CHILD]: number;
  adult: number;
  child: number;
}

export default function GuestSelect({ adult, child, onChange, close }: IGuestSelectProps) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [tempCount, setTemptCount] = useState({
    adult: adult,
    child: child,
  });

  const { ADULT, CHILD, INCREASE, ADULT_KO } = GUEST;
  const adultDisabled = adult === 1;
  const childDisabled = child === 0;
  const tempAdultDisabled = tempCount.adult === 1;
  const tempChildDisabled = tempCount.child === 0;

  const onTempChange = (guestCount: IGuestTempCount) => {
    setTemptCount({ adult: guestCount.adult, child: guestCount.child });
  };

  const handleChange = (button: string, item: string) => {
    const itemString = item === ADULT_KO ? ADULT : CHILD;
    const value = button === INCREASE ? +1 : -1;

    if (isDesktop) {
      const state: IGuestCount = { adult, child };
      state[itemString] += value;
      onChange(state);
    } else {
      const tempState: IGuestTempCount = { adult: tempCount.adult, child: tempCount.child };
      tempState[itemString] += value;
      onTempChange(tempState);
    }
  };

  const handleSelectClick = (tempCount: IGuestTempCount) => {
    onChange({ adult: tempCount.adult, child: tempCount.child });
    close();
  };

  return (
    <Wrapper>
      <GuestOptions>
        <ListHeader>객실 1</ListHeader>
        {GuestItems?.map((GuestItem) => (
          <ListMainItem key={GuestItem.key}>
            <ListItem>
              <ItemMainText>{GuestItem.key}</ItemMainText>
              <ItemSubText>{GuestItem.value}</ItemSubText>
            </ListItem>
            <GuestSelectButton
              item={GuestItem.key}
              disabled={
                isDesktop
                  ? GuestItem.key === ADULT_KO
                    ? adultDisabled
                    : childDisabled
                  : GuestItem.key === ADULT_KO
                  ? tempAdultDisabled
                  : tempChildDisabled
              }
              count={GuestItem.key === ADULT_KO ? adult : child}
              tempCount={GuestItem.key === ADULT_KO ? tempCount.adult : tempCount.child}
              handleChange={handleChange}
            />
          </ListMainItem>
        ))}
      </GuestOptions>
      <ButtonContainer>
        <Button onClick={() => handleSelectClick(tempCount)}>선택</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
const GuestItems = [
  { key: '성인', value: '' },
  { key: '아이', value: '(0~17세)' },
];

const Wrapper = styled(GuestSelectWrapperTemplate)``;

const GuestOptions = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
const ListHeader = styled.li`
  border-bottom: 1px solid rgb(238, 238, 238);
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;
`;

const ListMainItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgb(34, 34, 34);
  padding: 1rem;
  font-size: 4.8vw;
`;
const ListItem = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ItemMainText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(34, 34, 34);
`;
const ItemSubText = styled.p`
  font-size: 0.8rem;
`;

const ButtonContainer = styled(GuestSelectButtonTemplate)``;

const Button = styled.button`
  background-color: rgb(255, 55, 92);
  font-weight: 500;
  color: rgb(255, 255, 255);
  justify-content: center;
  width: 100vw;
  height: 10vw;
  font-size: 5vw;
  border-radius: 5px;
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
`;
