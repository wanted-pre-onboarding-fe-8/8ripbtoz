export interface IHotel {
  id: number;
  hotelName: string;
  base: number;
  max: number;
  reservation: boolean;
}

export type IHotels = IHotel[];

import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';
export interface IHotelCard extends IHotel {
  checkIn: string | null;
  checkOut: string | null;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<unknown, unknown>>;
}

export interface ISearchPayload {
  hotelName?: string;
  max?: number;
}

export interface ISchedule {
  checkIn: Date;
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
  reservation: {
    weekDay: string;
    date: string;
  };
  hotelName: string;
  startDate: string;
  endDate: string;
}

export type IReservations = IReservation[];
