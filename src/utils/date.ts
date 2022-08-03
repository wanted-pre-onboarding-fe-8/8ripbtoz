import { format } from 'date-fns';
import { WEEKDAYS } from './constants/time';

export function generateReservationDateInfo() {
  const today = new Date();
  const reservedWeekday = WEEKDAYS[today.getDay()];
  const formattedReservedDate = format(today, 'yyyy-MM-dd');
  return { date: formattedReservedDate, weekDay: reservedWeekday };
}
