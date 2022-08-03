import { useRecoilState } from 'recoil';
import { guestCountAtom } from '../store/searchAtom';
import { IGuestCount } from '../types';

export default function useGuestCountState() {
  const [{ adult, child }, setGuestCount] = useRecoilState<IGuestCount>(guestCountAtom);

  const total = adult + child;

  const onChange = (guestCount: IGuestCount) => {
    setGuestCount(guestCount);
  };

  return { adult, child, total, onChange };
}
