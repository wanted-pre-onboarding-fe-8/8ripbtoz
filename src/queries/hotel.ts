import httpClient from '../http';
import { useQuery } from '@tanstack/react-query';
import { IHotels, IPayload } from '../types/index';

export function useGetHotels(payload: IPayload) {
  const query = `?hotelName_like=${payload.hotelName}&max_gte=${payload.max}`;
  return useQuery(['hotels'], () => httpClient.get<IHotels>(`/hotels${query}`));
}

export function useGetReservationHotels() {
  const query = '?reservation=true';
  return useQuery(['reservationHotels'], () => httpClient.get<IHotels>(`/hotels${query}`));
}
