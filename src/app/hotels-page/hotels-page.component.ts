import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelsService } from '../Service/hotels.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotels-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.css']
})
export class HotelsPageComponent implements OnInit {
  hotels$!: Observable<any[]>;

  constructor(private hotelService: HotelsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getHotels();
  }

  loadHotel(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  bookHotel(hotelId: number): void {
    const message = this.hotelService.bookHotelById(hotelId);
    console.log(message);
  }
}
