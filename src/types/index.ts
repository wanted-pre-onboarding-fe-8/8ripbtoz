export interface IHotel {
  id: number;
  hotelName: string;
  base: number;
  max: number;
  reservation: boolean;
}

export type IHotels = IHotel[];

export interface IHotelCard extends IHotel {
  checkIn: string | null;
  checkOut: string | null;
}

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

export interface IReservation {
  id: number;
  reservationDate: {
    weekDay: string;
    date: string;
  };
  hotelName: string;
  startDate: string;
  endDate: string;
}

export type IReservations = IReservation[];
