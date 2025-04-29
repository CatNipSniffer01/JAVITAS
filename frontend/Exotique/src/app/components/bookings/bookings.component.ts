import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  standalone: false,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings: any[] = [];
  newBooking = {
    userId: '',
    animalId: '',
    startDate: '',
    endDate: ''
  };

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.getAllBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  createBooking(): void {
    const bookingPayload = {
      userId: this.newBooking.userId,
      animalId: this.newBooking.animalId,
      startDate: new Date(this.newBooking.startDate),
      endDate: new Date(this.newBooking.endDate)
    };

    this.bookingService.createBooking(bookingPayload).subscribe(() => {
      this.fetchBookings();
      this.newBooking = { userId: '', animalId: '', startDate: '', endDate: '' };
    });
  }

  deleteBooking(id: string): void {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.fetchBookings();
    });
  }
}