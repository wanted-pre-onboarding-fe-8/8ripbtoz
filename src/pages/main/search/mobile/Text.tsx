import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useKeywordState from '../../../../hooks/useKeywordState';

export default function Text() {
  const { keyword, onKeyUp } = useKeywordState();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      // inputRef.current.value = keyword;
    }
  }, [keyword]);

  return (
    <Wrapper>
      <SearchInput ref={inputRef} onKeyUp={onKeyUp} placeholder='지역명, 호텔명, 펜션명 검색' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 3vw;
  padding: 3vw 5vw 3vw 5vw;
  font-weight: 600;
  border-radius: 10vw;
  background-color: #eeeeee;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    padding: 12px 20px 12px 20px;
  }
`;
