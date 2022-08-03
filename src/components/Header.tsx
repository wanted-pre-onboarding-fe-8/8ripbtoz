import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Container>
        <Logo src='../../images/Logo_color.svg' onClick={() => navigate('/')} />
        <ReservationLink onClick={() => navigate('/reservation')}>예약 내역</ReservationLink>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 84px;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 978px;
  font-weight: bold;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const ReservationLink = styled.a`
  font-weight: 600;
  cursor: pointer;
`;
