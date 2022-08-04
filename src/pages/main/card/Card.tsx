import React from 'react';
import styled from 'styled-components';
import { IHotel, IHotelCard } from '../../../types';
import { setReservationHotel } from '../../../queries/hotel';
import { setHotelItem } from '../../../utils/storage';
import GridCard from './GridCard';

function Card(props: IHotelCard) {
  const { hotelName, reservation, base, max, id, checkIn, checkOut, refetch } = props;
  const { mutateAsync } = setReservationHotel();

  const updateReservationStatus = async (id: number) => {
    await mutateAsync(id);
    await refetch();
  };

  const handleClick = (id: number) => {
    updateReservationStatus(id);
    setHotelItem({ hotelName, id, checkIn, checkOut });
  };

  return (
    <Container disabled={reservation}>
      <ImgWrapper>
        <Img src={mockImg} alt={hotelName} />
      </ImgWrapper>
      <Info>
        <Typography fontSize='16px' fontWeight='bold'>
          {hotelName}
        </Typography>
        <Typography fontSize='13px' color='gray'>
          기준 {base}인 | 최대 {max}인
        </Typography>
      </Info>
      <ReservationButton disabled={reservation} onClick={() => handleClick(id)} />
    </Container>
  );
}

export default Card;

const mockImg = 'https://i.travelapi.com/hotels/1000000/30000/25000/24908/4a391ebd_b.jpg';
const Container = styled(GridCard)<{ disabled: boolean }>`
  & > * {
    color: ${({ disabled }) => (disabled ? 'lightGray' : 'inherit')};
  }
  opacity: ${({ disabled }) => disabled && '0.5'};
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
  &::before {
    content: '예약';
  }
  grid-area: button;
  background-color: #ff375c;
  border-radius: 5px;
  padding: 5% 10%;
  color: white;
  width: fit-content;
  justify-self: right;
  cursor: pointer;
  &:disabled {
    background-color: lightgray;
    cursor: default;
    &::before {
      content: '마감';
    }
  }
`;
