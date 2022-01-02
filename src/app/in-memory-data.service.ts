import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'Philipp Specht',
        roomNumber: 10,
        startDate: new Date(),
        endDate: new Date('2022-01-25'),
      },
      {
        id: 2,
        name: 'Manuel Neuer',
        roomNumber: 4,
        startDate: new Date('2022-01-3'),
        endDate: new Date('2022-01-10'),
      },
      {
        id: 3,
        name: 'Tilo Nem',
        roomNumber: 5,
        startDate: new Date('2022-01-5'),
        endDate: new Date('2022-01-12'),
      },
      {
        id: 4,
        name: 'Sabnrina Nadu',
        roomNumber: 20,
        startDate: new Date('2022-01-2'),
        endDate: new Date('2022-01-11'),
      },
      {
        id: 5,
        name: 'Ken Saver',
        roomNumber: 3,
        startDate: new Date('2022-01-10'),
        endDate: new Date('2022-01-16'),
      },
      {
        id: 6,
        name: 'Tina Turner',
        roomNumber: 23,
        startDate: new Date('2022-01-20'),
        endDate: new Date('2022-01-25'),
      },
    ];

    return bookings;
  }

  constructor() {}
}
