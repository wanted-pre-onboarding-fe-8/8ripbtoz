import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface IFullSizePopup {
  title: string;
  close: () => void;
  children: JSX.Element;
}

export default function FullSizePopup({ title, close, children }: IFullSizePopup) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef) {
      return disableScroll(wrapperRef as React.MutableRefObject<HTMLDivElement>);
    }
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Header>
        <Title>{title}</Title>
        <CloseButtonWrapper onClick={close}>
          <CloseRoundedIcon style={{ fontSize: isMobile ? '10vw' : '26px' }} />
        </CloseButtonWrapper>
      </Header>
      {children}
    </Wrapper>
  );
}

function disableScroll(ref: React.MutableRefObject<HTMLDivElement>) {
  document.body.style.cssText = 'overflow: hidden;';
  ref.current.style.cssText = 'overflow: auto;';
  return () => {
    document.body.style.cssText = 'overflow: auto;';
  };
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 18px;
  border-bottom: 1px solid #eeeeee;

  @media screen and (max-width: 480px) {
    padding: 6vw 5vw 6vw 5vw;
  }
`;

const Title = styled.h1`
  position: relative;
  top: -1px;
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 6vw;
  }
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  cursor: pointer;

  @media screen and (max-width: 480x) {
    right: 5vw;
  }
`;
