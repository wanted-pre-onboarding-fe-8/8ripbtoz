import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import styled from 'styled-components';

import GuestSelectButton from './GuestSelectButton';
import { GUEST } from '../../utils/constants/guest';

interface IGuestType {
  adult: number;
  child: number;
}

const DEFAULT_NUMBER = {
  adult: 2,
  child: 0,
};

export default function GuestSelect() {
  const [count, setCount] = useState<IGuestType>(DEFAULT_NUMBER);
  const { ADULT, INCREASE, DECREASE } = GUEST;
  const adultCount = count.adult;
  const childCount = count.child;
  const adultDisabled = adultCount === 1;
  const childDisabled = childCount === 0;

  const handleChange = (button: string, item: string) => {
    if (button === DECREASE) {
      if (item === ADULT) return setCount({ ...count, adult: adultCount - 1 });
      return setCount({ ...count, child: childCount - 1 });
    }
    if (button === INCREASE) {
      if (item === ADULT) return setCount({ ...count, adult: adultCount + 1 });
      return setCount({ ...count, child: childCount + 1 });
    }
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
              disabled={GuestItem.key === ADULT ? adultDisabled : childDisabled}
              count={GuestItem.key === ADULT ? adultCount : childCount}
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
const ButtonGroup = styled.div`
  display: flex;
  width: 5rem;
`;
