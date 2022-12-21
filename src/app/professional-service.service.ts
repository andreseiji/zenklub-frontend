import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  constructor(private http: HttpClient) {}

  getProfessional(id: string) {
    return this.http.get(`https://api.zenklub.com/professionals/${id}`);
  }
}
