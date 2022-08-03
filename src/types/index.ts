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

export interface IGuestCount {
  adult: number;
  child: number;
}
