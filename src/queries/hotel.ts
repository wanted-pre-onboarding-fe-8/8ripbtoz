import httpClient from '../http';
import { useQuery, useMutation, useInfiniteQuery } from '@tanstack/react-query';
import { IHotels, ISearchPayload } from '../types/index';

export function getHotels(payload: ISearchPayload) {
  const query = `?hotelName_like=${payload.hotelName}&max_gte=${payload.max}`;
  return useQuery(['hotels', payload.hotelName, payload.max], () =>
    httpClient.get<IHotels>(`/hotels${query}`),
  );
}

export function setReservationHotel() {
  return useMutation((id: number) => httpClient.patch(`/hotels/${id}`, { reservation: true }));
}

export function getInfiniteScroll(payload: ISearchPayload) {
  const query = `?hotelName_like=${payload.hotelName}&max_gte=${payload.max}&_limit=10&_page=`;
  return useInfiniteQuery(
    ['hotels', payload.hotelName, payload.max],
    async ({ pageParam = 1 }) => {
      const res = await httpClient.get<IHotels>(`/hotels${query}` + pageParam);
      if (res.length < 10) return { data: res, pageParam: undefined };
      return { data: res, pageParam: pageParam + 1 };
    },
    {
      getNextPageParam: (lastPage) => lastPage.pageParam ?? undefined,
      refetchOnWindowFocus: false,
    },
  );
}
