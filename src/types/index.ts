export interface IHotel {
  hotelName: string;
  occupancy: IOccupancy;
}

export interface IOccupancy {
  base: number;
  max: number;
  reservation: boolean;
}

export type IHotels = IHotel[];
