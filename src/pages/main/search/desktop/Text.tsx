import React from 'react';
import styled from 'styled-components';
import useKeywordState from '../../../../hooks/useKeywordState';
import SearchIcon from '@mui/icons-material/Search';

export default function Text() {
  const { keyword, onChange } = useKeywordState();

  return (
    <Wrapper>
      <Contents>
        <SearchIcon fontSize='large' />
        <SearchInput
          value={keyword}
          onChange={onChange}
          placeholder='지역명, 호텔명, 펜션명 검색'
        />
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1.1;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;

  :hover {
    background-color: #eeeeee;
    * {
      background-color: #eeeeee;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 55px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 3px;
`;
