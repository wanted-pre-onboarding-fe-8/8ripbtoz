import React from 'react';
import { Container, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import ReservationCard from './ReservationCard';

export default function Reservation() {
  const reservations: any[] = [
    {
      id: 1232455,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
    {
      id: 1232456,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
    {
      id: 1232457,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
    {
      id: 1232458,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
    {
      id: 1232459,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
    {
      id: 1232460,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
    {
      id: 1232461,
      reservationDate: {
        weekDay: 'monday',
        date: '2022-08-01',
      },
      hotelName: '라마다 제주시티홀',
      startDate: '2022-08-12',
      endDate: '2022-08-13',
    },
  ];
  return (
    <Wrapper>
      <ReservationContainer
        maxWidth='md'
        sx={{ display: 'flex', padding: '2rem 0', minHeight: '100vh' }}
      >
        <Aside>
          <Tabs>
            <Tab>예정된 예약</Tab>
          </Tabs>
        </Aside>
        <Main>
          <Reservations>
            {reservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </Reservations>
        </Main>
      </ReservationContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f5f5f5;
`;

const ReservationContainer = styled(Container)`
  @media (max-width: 890px) {
    flex-direction: column;
    max-width: 600px;
  }
`;

const Aside = styled.aside`
  margin-right: 30px;
  flex-basis: 25%;

  @media (max-width: 890px) {
    margin-right: 0;
  }
`;

const Tabs = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Tab = styled.li`
  padding: 1rem;
  font-size: 16px;
  font-weight: 300;
  color: rgb(255, 55, 92);
  background-color: rgb(255, 241, 241);
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const Main = styled.main`
  min-height: 400px;
  flex-basis: 75%;
`;

const Reservations = styled.ul`
  display: flex;
  flex-direction: column;
`;
