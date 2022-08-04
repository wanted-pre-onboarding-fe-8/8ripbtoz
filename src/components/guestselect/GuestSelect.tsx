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
        <ListHeader>
          <ListHeaderText>객실 1</ListHeaderText>
        </ListHeader>
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
  box-sizing: border-box;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 100vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    top: 0;
    left: 0;
    margin: auto;
    box-shadow: rgb(0 0 0 / 20%) 20px 20px 20px 5px;
  }
`;

const Header = styled.h2`
  background-color: #fff;
  display: none;
  width: 100%;
  color: rgb(34, 34, 34);
  font-size: 5vw;
  line-height: 5vw;
  font-weight: 500;
  text-align: center;
  padding: 1rem;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    display: block;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: block;
    width: 768px;
    font-size: 18px;
  }
`;
const GuestOptions = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
`;
const ListHeader = styled.li`
  border-bottom: 1px solid rgb(238, 238, 238);
  padding: 1rem;
  @media screen and (min-width: 481px) and (max-width: 767px) {
    padding: 6.6vw;
  }
`;
const ListHeaderText = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  @media screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 3.8vw;
  }
`;

const ListMainItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgb(34, 34, 34);
  padding: 1rem;
  font-size: 4.8vw;
  @media screen and (min-width: 481px) and (max-width: 767px) {
    padding: 6.6vw;
  }
`;
const ListItem = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ItemMainText = styled.p`
  font-size: 1rem;
  color: rgb(34, 34, 34);
  @media screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 3.8vw;
  }
`;
const ItemSubText = styled.p`
  font-size: 0.8rem;
  @media screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 3.8vw;
  }
`;
