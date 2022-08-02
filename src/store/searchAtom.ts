import { atom } from 'recoil';
import { addDays } from 'date-fns';

export const keywordAtom = atom<string>({
  key: 'keywordAtom',
  default: '',
});

export interface ISchedule {
  checkIn: Date;
  checkOut: Date;
}
export const scheduleAtom = atom<ISchedule>({
  key: 'scheduleAtom',
  default: {
    checkIn: addDays(new Date(), 7),
    checkOut: addDays(new Date(), 8),
  },
});

export interface IGuestCount {
  adult: number;
  child: number;
}
export const guestCountAtom = atom<IGuestCount>({
  key: 'guestCountAtom',
  default: {
    adult: 2,
    child: 0,
  },
});
