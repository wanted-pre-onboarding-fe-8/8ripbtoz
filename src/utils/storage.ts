import { IHotel } from '../types';
import { generateReservationDateInfo } from './date';

function getStorageItem(key: string, defaultValue: string) {
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

export function setHotelItem({ hotelName, id }: IHotel) {
  const reservation = generateReservationDateInfo();
  setStorageItem(hotelName, {
    id,
    reservation,
  });
}

function setStorageItem(key: string, value: string | Record<string, unknown>) {
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
