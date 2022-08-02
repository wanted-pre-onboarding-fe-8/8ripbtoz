import React from 'react';
import styled from 'styled-components';
import GridCard from './GridCard';

interface CardProps {
  hotelName: string;
  occupancy: { base: number; max: number };
  disabled: boolean;
}

function Card({ hotelName, occupancy, disabled }: CardProps) {
  return (
    <Container sx={{ boxShadow: 'rgb(94 94 94 / 10%) 0px 2px 4px 0px' }} disabled={disabled}>
      <ImgWrapper>
        <Img src={mockImg} alt={hotelName} />
      </ImgWrapper>
      <Info>
        <Typography fontSize='16px' fontWeight='bold'>
          {hotelName}
        </Typography>
        <Typography fontSize='13px' color='gray'>
          기준 {occupancy.base}인 | 최대 {occupancy.max}인
        </Typography>
      </Info>
      <ReservationButton disabled={disabled}>예약</ReservationButton>
    </Container>
  );
}

export default Card;

const mockImg = 'https://i.travelapi.com/hotels/1000000/30000/25000/24908/4a391ebd_b.jpg';
const Container = styled(GridCard)<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? 'lightGray' : 'inherit')};
  filter: ${({ disabled }) => disabled && 'grayscale(100%)'};
  opacity: ${({ disabled }) => disabled && '0.7'};
  & > button {
    cursor: ${({ disabled }) => disabled && 'default'};
  }
`;

const ImgWrapper = styled.div`
  width: calc(100% + 2 * 10px);
  margin: 10px 0 10px -10px;
  height: 100%;
  overflow: hidden;
  grid-area: image;
  object-fit: contain;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  grid-area: title;
  padding: 10px;
`;

const Typography = styled.p<{ fontWeight?: string; fontSize?: string; color?: string }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '1rem')};
  color: ${({ color }) => color};
`;

const ReservationButton = styled.button`
  grid-area: button;
  background-color: #ff375c;
  border-radius: 5px;
  padding: 5% 10%;
  color: white;
  width: fit-content;
  justify-self: right;
  cursor: pointer;
`;
