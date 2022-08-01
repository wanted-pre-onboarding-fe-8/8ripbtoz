import React from 'react';
import styled from 'styled-components';

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
  return <CardWrapper></CardWrapper>;
}

const CardWrapper = styled.li``;
