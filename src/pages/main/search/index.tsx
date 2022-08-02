import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Desktop from './desktop';
import Mobile from './mobile';

export default function index() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return <>{isDesktop ? <Desktop /> : <Mobile />}</>;
}
