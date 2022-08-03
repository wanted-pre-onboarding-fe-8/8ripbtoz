import useKeywordState from './useKeywordState';
import useGuestCountState from './useGuestCountState';

export default function useSearchPayload() {
  const { keyword: hotelName } = useKeywordState();
  const { total: max } = useGuestCountState();

  return { hotelName, max };
}
