import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { GUEST } from '../../utils/constants/guest';
import { GuestButtonTemplate } from './GuestTemplate';
import { useMediaQuery } from 'react-responsive';

interface GuestSelectButtonProps {
  count: number;
  item: string;
  disabled: boolean;
  tempCount: number;
  handleChange: (key: string, item: string) => void;
}

export default function GuestSelectButton({ ...props }: GuestSelectButtonProps) {
  const { count, handleChange, item, disabled, tempCount } = props;
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const guestCount = isDesktop ? count : tempCount;
  const { DECREASE } = GUEST;

  return (
    <>
      {ButtonGroup.map((button, index) => (
        <Container key={index}>
          <ButtonGroups>
            <Button
              name={button.key}
              disabled={button.key === DECREASE && disabled}
              onClick={() => handleChange(button.key, item)}
            >
              {button.value}
            </Button>
          </ButtonGroups>
          {index === 1 ? <Counter style={{ display: 'none' }} /> : <Counter>{guestCount}</Counter>}
        </Container>
      ))}
    </>
  );
}

export const ButtonGroup = [
  { key: 'decrease', value: <RemoveIcon style={{ width: 'auto', height: 'auto' }} /> },
  { key: 'increase', value: <AddIcon style={{ width: 'auto', height: 'auto' }} /> },
];
const Container = styled(GuestButtonTemplate)``;

const ButtonGroups = styled.span`
  display: flex;
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
  transition: opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  &:first-of-type {
    background-color: ${({ disabled }) => disabled && '#eaeaea'};
    opacity: ${({ disabled }) => disabled && '0.5'};
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
`;
