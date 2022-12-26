import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/config/api';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  constructor(private http: HttpClient) {}

  getProfessionals() {
    return this.http.get(`${BASE_API_URL}/professionals`);
  }

  getProfessional(id: string) {
    return this.http.get(`${BASE_API_URL}/professionals/${id}`);
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
