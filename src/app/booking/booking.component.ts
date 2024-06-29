import { Component, OnInit } from '@angular/core';
import { TourService } from '../Service/tour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingComponent implements OnInit {
  bookings!: any[];

  constructor(private ts: TourService) { }

  ngOnInit(): void {
    this.bookings = this.ts.getBookings();
  }
}
