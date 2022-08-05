import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useScrollDirection from '../hooks/useScrollDirection';
import { HEIGHT } from '../utils/constants/header';

export default function Header() {
  const navigate = useNavigate();
  const isDown = useScrollDirection();

  return (
    <Wrapper isDown={isDown}>
      <HeaderWrapper>
        <Container>
          <Logo src='../../images/Logo_color.svg' onClick={() => navigate('/')} />
          <ReservationLink onClick={() => navigate('/reservation')}>예약 내역</ReservationLink>
        </Container>
      </HeaderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isDown: boolean }>`
  width: 100%;
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 2;
  transition: transform 1s;
  transform: translateY(${({ isDown }) => (isDown ? `${-HEIGHT}px` : '0px')});
`;

const HeaderWrapper = styled.header`
  height: ${`${HEIGHT}px`};
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
