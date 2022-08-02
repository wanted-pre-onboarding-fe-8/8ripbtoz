export interface IHotel {
  hotelName: string;
  base: number;
  max: number;
  reservation: boolean;
  reservationObject?: IReservation;
}

export type IHotels = IHotel[];

export interface IReservation {
  id?: number;
  weekDay?: string;
  date?: string;
}

export interface IPayload {
  hotelName: string;
  max: number;
  reservation?: boolean;
}
