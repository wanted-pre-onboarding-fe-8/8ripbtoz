import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { GUEST } from '../../utils/constants/guest';
interface GuestSelectButtonProps {
  count: number;
  item: string;
  disabled: boolean;
  handleChange: (key: string, item: string) => void;
}

export default function GuestSelectButton({ ...props }: GuestSelectButtonProps) {
  const { count, handleChange, item, disabled } = props;
  const { DECREASE } = GUEST;

  return (
    <>
      {ButtonGroup.map((button, index) => (
        <ButtonGroups key={index} style={{ display: 'flex' }}>
          <Button
            name={button.key}
            disabled={button.key === DECREASE && disabled}
            onClick={() => handleChange(button.key, item)}
          >
            {button.value}
          </Button>
          {index === 1 ? <Counter style={{ display: 'none' }} /> : <Counter>{count}</Counter>}
        </ButtonGroups>
      ))}
    </>
  );
}

export const ButtonGroup = [
  { key: 'decrease', value: <RemoveIcon style={{ width: '10px', height: '10px' }} /> },
  { key: 'increase', value: <AddIcon style={{ width: '10px', height: '10px' }} /> },
];

const ButtonGroups = styled.span`
  margin: auto;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgb(104, 104, 136);
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.7s;
  &:first-of-type {
    background-color: ${({ disabled }) => disabled && '#eaeaea'};
    opacity: ${({ disabled }) => disabled && '0.5'};
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 6vw;
    height: 6vw;
  }
`;
const Counter = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  justify-content: center;
  text-align: center;
  line-height: 1.5rem;
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 13vw;
    height: 5vw;
    font-size: 5vw;
    line-height: 5vw;
  }
`;
