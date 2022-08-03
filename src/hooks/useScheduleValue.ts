import { useRecoilValue } from 'recoil';
import { format } from 'date-fns';
import { scheduleAtom } from '../store/searchAtom';
import { ISchedule } from '../types';

export default function useScheduleValue() {
  const { checkIn, checkOut } = useRecoilValue<ISchedule>(scheduleAtom);

  const checkInString = checkIn && format(checkIn, 'yyyy-MM-dd');
  const checkOutString = checkOut && format(checkOut, 'yyyy-MM-dd');

  return {
    checkIn,
    checkOut,
    checkInString,
    checkOutString,
  };
}
