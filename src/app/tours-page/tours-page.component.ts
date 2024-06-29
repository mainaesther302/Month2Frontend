import { Component, OnInit } from '@angular/core';
import { ShortenDescription } from '../pipes/shortenDescription';
import { TourService } from '../Service/tour.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [ShortenDescription, CommonModule],
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.css']
})
export class ToursPageComponent implements OnInit {
  tours!: any;

  constructor(private ts: TourService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tours = this.ts.getTours();
  }

  loadtour(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  bookTour(tourId: number): void {
    const message = this.ts.bookTourById(tourId);
    console.log(message);
  }
}
