import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ISearchPayload } from '../../../../types';
import useSearchPayload from '../../../../hooks/useSearchPayload';
import Count from './Count';
import Schedule from './Schedule';
import Text from './Text';

interface ISearchProps {
  setPayload: React.Dispatch<React.SetStateAction<ISearchPayload>>;
}

export default function Search({ setPayload }: ISearchProps) {
  const payload = useSearchPayload();

  useEffect(() => {
    setPayload(payload);
  }, [payload.hotelName, payload.max]);

  return (
    <Wrapper>
      <Text />
      <Schedule />
      <Count />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;
