export interface IHotel {
  id: number;
  hotelName: string;
  base: number;
  max: number;
  reservation: boolean;
}

export type IHotels = IHotel[];

export interface ISearchPayload {
  hotelName?: string;
  max?: number;
}

export interface ISchedule {
  checkIn: Date | null;
  checkOut: Date | null;
}

import { GUEST } from '../utils/constants/guest';
export interface IGuestCount {
  [key: typeof GUEST.ADULT | typeof GUEST.CHILD]: number;
  adult: number;
  child: number;
}
