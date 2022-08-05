import { useState, useRef, useEffect } from 'react';
import { debounce } from '../utils/optimization';

export default function useScrollDirection() {
  const [isDown, setIsDown] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = debounce(() => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const isDown = pageYOffset !== 0 && deltaY >= 0;
    setIsDown(isDown);
    setPageY(pageYOffset);
  });

  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  return isDown;
}
