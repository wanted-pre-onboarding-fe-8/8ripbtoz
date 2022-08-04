import { generateReservationDateInfo } from './date';

const LOCALSTORAGE_KEY = 'hotels';

interface setHotelItemProps {
  hotelName: string;
  id: number;
  checkIn: string | null;
  checkOut: string | null;
}

export function getStorageItem(key: string, defaultValue: Record<string, string>[]) {
  try {
    const value = localStorage.getItem(key);
    if (!value || value === 'null') {
      return defaultValue;
    }
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch {
    return defaultValue;
  }
}

export function setHotelItem({ hotelName, id, checkIn, checkOut }: setHotelItemProps) {
  const prevValue = getStorageItem(LOCALSTORAGE_KEY, []);
  const reservation = generateReservationDateInfo();

  setStorageItem(LOCALSTORAGE_KEY, [
    ...prevValue,
    { hotelName, id, reservation, startDate: checkIn, endDate: checkOut },
  ]);
}

export function setStorageItem(key: string, value: string | Record<string, string>[]) {
  try {
    if (typeof value === 'object') value = JSON.stringify(value);
    localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

export function clearStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    console.log(e);
  }
}
