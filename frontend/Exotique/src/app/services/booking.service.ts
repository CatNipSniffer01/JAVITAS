import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseurl = 'http://localhost:3000/api/bookings';

  constructor(private http: HttpClient) { }
  
  getAllBookings(): Observable<any> {
    return this.http.get<any>(this.baseurl);
  }
  createBooking(booking: any): Observable<any> {
    return this.http.post<any>(this.baseurl, booking);
  }
  getBookingById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/${id}`);
  }
  updateBooking(id: string, booking: any): Observable<any> {
    return this.http.put<any>(`${this.baseurl}/${id}`, booking);
  }
  deleteBooking(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseurl}/${id}`);
  }
}
