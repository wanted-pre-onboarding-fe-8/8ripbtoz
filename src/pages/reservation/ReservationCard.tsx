import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ReservationCardProps {
  reservation: {
    id: number;
    reservationDate: {
      weekDay: string;
      date: string;
    };
    hotelName: string;
    startDate: string;
    endDate: string;
  };
}

export default function ReservationCard({ reservation }: ReservationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          예약번호<ReservationNumber>{reservation.id}</ReservationNumber>
        </div>
        <ReservationDate>
          {reservation.reservationDate.date} ({reservation.reservationDate.weekDay}) 예약
        </ReservationDate>
      </CardHeader>
      <CardContent>
        <CardDetail>
          <HotelName>{reservation.hotelName}</HotelName>
          <Schedule>
            일정 <span>{reservation.startDate} (금)</span> | <span>{reservation.endDate} (토)</span>{' '}
            | <span>1박</span>
          </Schedule>
        </CardDetail>
        <DetailButton>
          <ArrowForwardIosIcon />
        </DetailButton>
      </CardContent>
    </Card>
  );
}

const Card = styled.li`
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  background: white;
`;

const CardHeader = styled.div`
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #c5c5c5;
  border-bottom: 1px solid #eeeeee;
`;

const ReservationNumber = styled.span`
  margin-left: 1rem;
  font-weight: bold;
  color: black;
`;

const ReservationDate = styled.div``;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const CardDetail = styled.div`
  flex-grow: 1;
`;

const DetailButton = styled.button`
  padding: 0;
  align-self: stretch;
  background-color: inherit;
  cursor: pointer;
`;

const HotelName = styled.h3`
  margin: 1.5rem 0;
  font-size: 22px;
  font-weight: bold;
`;

const Schedule = styled.div`
  margin-bottom: 1rem;
  color: #c5c5c5;
  font-weight: 400;

  & > span {
    color: black;
  }
`;