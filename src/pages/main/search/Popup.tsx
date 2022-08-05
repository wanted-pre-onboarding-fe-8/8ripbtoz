import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

export function usePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const open = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(true);
    e.preventDefault();
  };
  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
}

interface IPopup {
  top: number;
  left: number;
  close: () => void;
  children: JSX.Element;
}

export function Popup({ top, left, close, children }: IPopup) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.focus();
    }
  }, []);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const handleBlur = () => {
    if (isDesktop) {
      close();
    }
  };

  return (
    <Wrapper
      ref={wrapperRef}
      tabIndex={0}
      top={top}
      left={left}
      onBlur={handleBlur}
      isDesktop={isDesktop}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  top: number;
  left: number;
  isDesktop: boolean;
}>`
  position: ${({ isDesktop }) => (isDesktop ? 'absolute' : 'fixed')};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background-color: white;
  z-index: 2;
`;
