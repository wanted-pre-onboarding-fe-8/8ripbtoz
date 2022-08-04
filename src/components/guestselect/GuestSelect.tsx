import React from 'react';
import styled from 'styled-components';
import { GUEST } from '../../utils/constants/guest';
import { IGuestCount } from '../../types';
import GuestSelectButton from './GuestSelectButton';

interface IGuestSelectProps {
  adult: number;
  child: number;
  onChange: (guestCount: IGuestCount) => void;
}

export default function GuestSelect({ adult, child, onChange }: IGuestSelectProps) {
  const { ADULT, CHILD, INCREASE, ADULT_KO } = GUEST;
  const adultDisabled = adult === 1;
  const childDisabled = child === 0;

  const handleChange = (button: string, item: string) => {
    const itemString = item === ADULT_KO ? ADULT : CHILD;

    const state: IGuestCount = { adult, child };
    state[itemString] += button === INCREASE ? +1 : -1;
    onChange(state);
  };

  return (
    <Wrapper>
      <Header>인원 및 객실</Header>
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
              disabled={GuestItem.key === ADULT_KO ? adultDisabled : childDisabled}
              count={GuestItem.key === ADULT_KO ? adult : child}
              handleChange={handleChange}
            />
          </ListMainItem>
        ))}
      </GuestOptions>
    </Wrapper>
  );
}

const GuestItems = [
  { key: '성인', value: '' },
  { key: '아이', value: '(0~17세)' },
];

const Wrapper = styled.section`
  width: 320px;
  @media screen and (max-width: 480px) {
    width: 100vw;
    h2 {
      display: block;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 100vw;
    h2 {
      display: block;
    }
    li {
      padding: 6.6vw;
      font-size: 3.8vw;
    }
    p {
      font-size: 3.8vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    top: 0;
    left: 0;
    margin: auto;
    h2 {
      display: block;
      width: 768px;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1024px) {
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
  }
`;

const Header = styled.h2`
  background-color: #fff;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: none;
  width: 100%;
  color: rgb(34, 34, 34);
  font-size: 5vw;
  line-height: 5vw;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
`;
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
  color: rgb(34, 34, 34);
`;
const ItemSubText = styled.p`
  font-size: 0.8rem;
`;
