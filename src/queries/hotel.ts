import httpClient from '../http';
import { useQuery, useMutation } from '@tanstack/react-query';
import { IHotels, IPayload } from '../types/index';

export function getHotels(payload: IPayload) {
  const query = `?hotelName_like=${payload.hotelName}&max_gte=${payload.max}`;
  return useQuery(['hotels'], () => httpClient.get<IHotels>(`/hotels${query}`));
}

export function setReservationHotel() {
  return useMutation((id: number) => httpClient.patch(`/hotels/${id}`, { reservation: true }));
}
