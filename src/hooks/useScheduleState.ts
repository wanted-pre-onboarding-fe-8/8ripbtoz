import { useRecoilState } from 'recoil';
import { format, differenceInDays } from 'date-fns';
import { ISchedule, scheduleAtom } from '../store/searchAtom';

export default function useScheduleState() {
  const [{ checkIn, checkOut }, setSchedule] = useRecoilState<ISchedule>(scheduleAtom);

  const checkInString = checkIn === null ? '날짜 추가' : format(checkIn, 'M월 d일');
  const checkOutString = checkOut === null ? '날짜 추가' : format(checkOut, 'M월 d일');
  const checkInFullString = checkIn === null ? '날짜 추가' : format(checkIn, 'yyyy.MM.dd');
  const checkOutFullString = checkOut === null ? '날짜 추가' : format(checkOut, 'yyyy.MM.dd');

  const lodgeCount =
    checkIn === null || checkOut === null ? 0 : differenceInDays(checkOut, checkIn);
  const lodgeCountString = `${lodgeCount}박`;

  const onChange = (schedule: ISchedule) => {
    setSchedule(schedule);
  };

  return {
    checkIn,
    checkOut,
    lodgeCount,
    checkInString,
    checkOutString,
    checkInFullString,
    checkOutFullString,
    lodgeCountString,
    onChange,
  };
}
