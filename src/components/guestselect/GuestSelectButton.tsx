import React, { EventHandler } from 'react';
import styled, { css } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { GUEST } from '../../utils/constants/guest';

interface GuestSelectButtonProps {
  name?: string;
  count: any;
  item: string;
  handleChange: (key: string, item: string) => void;
  disabled?: boolean;
}

export default function GuestSelectButton({ ...props }: GuestSelectButtonProps) {
  const { count, handleChange, item, disabled } = props;
  const { ADULT } = GUEST;
  const adultCount = count.adult;
  const chidCount = count.child;

  return (
    <>
      {ButtonGroup.map((button) => (
        <>
          <ButtonGroups key={button.key} style={{ display: 'flex' }}>
            <Button
              name={button.key}
              disabled={disabled}
              onClick={() => handleChange(button.key, item)}
            >
              {button.value}
            </Button>
          </ButtonGroups>
          {item === ADULT ? <Counter>{count.adult}</Counter> : <Counter>{count.child}</Counter>}
        </>
      ))}
    </>
  );
}

export const ButtonGroup = [
  { key: 'decrease', value: <RemoveIcon style={{ width: '10px', height: '10px' }} /> },
  { key: 'increase', value: <AddIcon style={{ width: '10px', height: '10px' }} /> },
];

const ButtonGroups = styled.span`
  &:first-of-type {
    background-color: red;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgb(104, 104, 136);
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  font-size: 14px;
  cursor: pointer;
`;
const Counter = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  text-align: center;
  line-height: 1.5rem;
`;
