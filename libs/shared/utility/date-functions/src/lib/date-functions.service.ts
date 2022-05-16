import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateFunctionsService {
  constructor() {}

  getWeekNumberFromDateRange(startDate: string, endDate: string) {
    const firstDate = new Date(startDate);
    const lastDate = new Date(endDate);
    const deltaDays = Math.floor(
      (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const weekNumber = Math.floor(deltaDays / 7) + 1;
    return weekNumber;
  }
}
