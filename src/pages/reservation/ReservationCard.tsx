import { differenceInDays, getDay } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { IReservation } from '../../types';
import { DISPLAY_WEEKDAYS } from '../../utils/constants/time';

interface ReservationCardProps {
  reservation: IReservation;
}

export default function ReservationCard({ reservation }: ReservationCardProps) {
  const weekDay = getDay(new Date(reservation.reservation.date));
  const startDay = getDay(new Date(reservation.startDate));
  const endDay = getDay(new Date(reservation.endDate));
  const nights = differenceInDays(new Date(reservation.endDate), new Date(reservation.startDate));

  return (
    <Card>
      <CardHeader>
        <div>
          예약번호<ReservationNumber>{reservation.id}</ReservationNumber>
        </div>
        <ReservationDate>
          {reservation.reservation.date} ({DISPLAY_WEEKDAYS[weekDay]}) 예약
        </ReservationDate>
      </CardHeader>
      <CardContent>
        <CardDetail>
          <HotelName>{reservation.hotelName}</HotelName>
          <Schedule>
            일정{' '}
            <span>
              {reservation.startDate} ({DISPLAY_WEEKDAYS[startDay]})
            </span>{' '}
            |{' '}
            <span>
              {reservation.endDate} ({DISPLAY_WEEKDAYS[endDay]})
            </span>{' '}
            | <span>{nights}박</span>
          </Schedule>
        </CardDetail>
      </CardContent>
    </Card>
  );
}

const Card = styled.li`
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  background: white;
  box-shadow: #e4e4e4 2px 2px 4px 2px;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 2vw 3vw;
  }
`;

const CardHeader = styled.div`
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #c5c5c5;
  border-bottom: 1px solid #eeeeee;

  @media (max-width: 600px) {
    padding: 2.3vw 0;
    font-size: 3vw;
  }
`;

const ReservationNumber = styled.span`
  margin-left: 1rem;
  font-weight: bold;
  color: black;

  @media (max-width: 600px) {
    margin-left: 1.3vw;
  }
`;

const ReservationDate = styled.div``;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const CardDetail = styled.div`
  flex-grow: 1;
`;

const HotelName = styled.h3`
  margin: 1.5rem 0;
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 600px) {
    margin: 4vw 0;
    font-size: 4vw;
  }
`;

const Schedule = styled.div`
  margin-bottom: 1rem;
  color: #c5c5c5;
  font-weight: 400;

  & > span {
    color: black;
  }

  @media (max-width: 600px) {
    margin: 1.3vw 0;
    font-size: 3vw;
  }
`;
