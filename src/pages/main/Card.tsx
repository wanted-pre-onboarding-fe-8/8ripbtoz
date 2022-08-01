import React from 'react';
import styled from 'styled-components';

interface CardProps {
  hotel_name: string;
  occupancy: { base: number; max: number };
  disabled: boolean;
}

function Card({ hotel_name, occupandy, disabled }: CardProps) {
  return <div>Card</div>;
}

export default Card;
