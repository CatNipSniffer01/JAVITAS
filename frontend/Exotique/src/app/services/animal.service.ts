import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class AnimalService {
  private baseUrl = 'http://localhost:3000/api/animals'; // Update with your API URL
  
  constructor(private http: HttpClient) {}

  getAllAnimals(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createAnimal(animal: any): Observable<any> {
    return this.http.post(this.baseUrl, animal);
  }

  getAnimal(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateAnimal(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteAnimal(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}