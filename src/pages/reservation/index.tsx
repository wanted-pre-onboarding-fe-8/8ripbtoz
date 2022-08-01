import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';

export default function Reservation() {
  return (
    <Wrapper>
      <Container maxWidth='md' sx={{ display: 'flex', padding: '2rem 0', minHeight: '100vh' }}>
        <Aside>
          <Tabs>
            <Tab>예정된 예약</Tab>
          </Tabs>
        </Aside>
        <Main></Main>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f5f5f5;
`;

const Aside = styled.aside`
  margin-right: 30px;
  flex-basis: 25%;
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
`;

const Main = styled.main`
  min-height: 400px;
  flex-basis: 75%;
  background-color: white;
`;
