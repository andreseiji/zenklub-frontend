import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/config/api';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule';
import { Professional } from '../models/professional';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  constructor(private http: HttpClient) {}

  getProfessionals(): Observable<Professional[]> {
    return this.http.get<Professional[]>(`${BASE_API_URL}/professionals`);
  }

  getProfessional(id: string): Observable<Professional> {
    return this.http.get<Professional>(`${BASE_API_URL}/professionals/${id}`);
  }

  getProfessionalSchedule(
    id: string,
    startDate?: string,
    endDate?: string
  ): Observable<Schedule> {
    const filters =
      startDate && endDate ? `?startDate=${startDate}&endDate=${endDate}` : '';
    return this.http.get<Schedule>(
      `${BASE_API_URL}/professionals/${id}/schedule${filters}`
    );
  }
}
