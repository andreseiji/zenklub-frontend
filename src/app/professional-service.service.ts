import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/config/api';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  constructor(private http: HttpClient) {}

  getProfessional(id: string) {
    return this.http.get(`${BASE_API_URL}/professionals/${id}`);
  }
}
