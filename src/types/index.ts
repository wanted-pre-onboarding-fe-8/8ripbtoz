export interface IHotel {
  id: number;
  hotelName: string;
  base: number;
  max: number;
  reservation: boolean;
}

export type IHotels = IHotel[];

export interface IPayload {
  hotelName?: string;
  max?: number;
  reservation?: boolean;
}
