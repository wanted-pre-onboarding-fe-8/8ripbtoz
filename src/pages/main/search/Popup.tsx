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

  return (
    <Wrapper ref={wrapperRef} tabIndex={0} top={top} left={left} onBlur={() => close()}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  top: number;
  left: number;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: white;
  z-index: 2;
`;
