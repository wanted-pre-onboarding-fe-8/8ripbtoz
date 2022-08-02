import React from 'react';
import styled from 'styled-components';
import Count from './Count';
import Schedule from './Schedule';
import Text from './Text';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Wrapper>
      <Text />
      <Schedule />
      <Count />
      <Button>
        <StyledSearchIcon fontSize='large' />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 976px;
  height: 60px;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
`;

const Button = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff375c;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: white;
`;
