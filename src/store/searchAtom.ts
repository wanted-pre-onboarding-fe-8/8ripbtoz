import { atom } from 'recoil';
import { addDays } from 'date-fns';
import { IGuestCount, ISchedule } from '../types';

export const keywordAtom = atom<string>({
  key: 'keywordAtom',
  default: '',
});

export const scheduleAtom = atom<ISchedule>({
  key: 'scheduleAtom',
  default: {
    checkIn: addDays(new Date(), 7),
    checkOut: addDays(new Date(), 8),
  },
});

export const guestCountAtom = atom<IGuestCount>({
  key: 'guestCountAtom',
  default: {
    adult: 2,
    child: 0,
  },
});
