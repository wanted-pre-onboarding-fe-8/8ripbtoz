import React from 'react';
import styled from 'styled-components';
import { GUEST } from '../../utils/constants/guest';
import { IGuestCount } from '../../types';
import GuestSelectButton from './GuestSelectButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

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
      <ContainerHeader>인원 및 객실</ContainerHeader>
      <GuestOptions>
        <ListHeader>
          <ListHeaderText>객실 1</ListHeaderText>
        </ListHeader>
        {GuestItems?.map((GuestItem) => (
          <ListMainItem key={GuestItem.key}>
            <ListItemText>
              <ItemMainText>{GuestItem.key}</ItemMainText>
              <ItemSubText>{GuestItem.value}</ItemSubText>
            </ListItemText>
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
    width: 480px;
  }
`;

const ContainerHeader = styled.div`
  display: none;
  width: 100%;
  color: rgb(34, 34, 34);
  font-size: 5vw;
  line-height: 5vw;
  font-weight: 500;
  text-align: center;
  padding: 1rem;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
const GuestOptions = styled(List)`
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
  @media screen and (min-width: 480px) {
  }
`;
const ListHeader = styled(ListSubheader)`
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const ListHeaderText = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;
const ListMainItem = styled(ListItem)`
  color: rgb(34, 34, 34);
  &:nth-last-child(1) {
    border-bottom: 1px solid rgb(238, 238, 238);
  }
`;
const ItemMainText = styled.p`
  font-size: 1rem;
  color: rgb(34, 34, 34);
`;
const ItemSubText = styled.p`
  font-size: 0.8rem;
`;
