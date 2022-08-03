import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ISearchPayload } from '../../../types';
import Desktop from './desktop';
import Mobile from './mobile';

interface ISearchProps {
  setPayload: React.Dispatch<React.SetStateAction<ISearchPayload>>;
}

export default function index({ setPayload }: ISearchProps) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <>{isDesktop ? <Desktop setPayload={setPayload} /> : <Mobile setPayload={setPayload} />}</>
  );
}
