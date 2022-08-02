import React, { useEffect, useRef, useState } from 'react';
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
  isOpen: boolean;
  close: () => void;
  children: JSX.Element;
}

export function Popup({ top, left, isOpen, close, children }: IPopup) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen && wrapperRef.current) {
      wrapperRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Wrapper
      ref={wrapperRef}
      tabIndex={0}
      top={top}
      left={left}
      isOpen={isOpen}
      onBlur={() => close()}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  top: number;
  left: number;
  isOpen: boolean;
}>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;
