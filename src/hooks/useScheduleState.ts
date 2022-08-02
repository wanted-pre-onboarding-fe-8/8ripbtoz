import { useRecoilState } from 'recoil';
import { format, differenceInDays } from 'date-fns';
import { ISchedule, scheduleAtom } from '../store/searchAtom';

export default function useScheduleState() {
  const [{ checkIn, checkOut }, setSchedule] = useRecoilState<ISchedule>(scheduleAtom);

  const checkInString = format(checkIn, 'M월 d일');
  const checkOutString = format(checkOut, 'M월 d일');
  const checkInFullString = format(checkIn, 'yyyy.MM.dd');
  const checkOutFullString = format(checkOut, 'yyyy.MM.dd');

  const lodgeCount = differenceInDays(checkOut, checkIn);
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
