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
