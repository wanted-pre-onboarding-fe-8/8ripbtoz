import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface GuestSelectButtonProps {
  name?: string;
  count: number;
  color?: 'white' | 'gray';
  disabled?: boolean;
}

export default function GuestSelectButton({ count, color }: GuestSelectButtonProps) {
  return (
    <>
      {ButtonGroup.map((button, index) => (
        <span key={button.key} style={{ display: 'flex' }}>
          <Button name={button.key}>{button.value}</Button>
          {index === 1 ? <Counter style={{ display: 'none' }} /> : <Counter>{count}</Counter>}
        </span>
      ))}
    </>
  );
}

const ButtonGroup = [
  { key: 'decrease', value: <RemoveIcon style={{ width: '10px', height: '10px' }} /> },
  { key: 'increase', value: <AddIcon style={{ width: '10px', height: '10px' }} /> },
];

const Button = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgb(104, 104, 136);
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  &:nth-child(1)::before {
    background-color: black;
  }
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
