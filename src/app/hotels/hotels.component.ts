import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelsService } from '../Service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.css']
})
export class HotelsPageComponent implements OnInit {
  hotels$!: Observable<any[]>;
  form!: FormGroup;
  editMode = false;
  currentHotelId?: number;

  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getHotels();

    // Initialize the form
    this.form = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      rating: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      description: ['', Validators.required]
    });

    // Check if we are editing an existing hotel
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.editMode = true;
        this.currentHotelId = id;
        this.hotelService.getHotelById(id).subscribe(hotel => {
          if (hotel) {
            this.form.patchValue({
              name: hotel.name,
              location: hotel.location,
              rating: hotel.rating,
              description: hotel.description
            });
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;
    if (this.editMode && this.currentHotelId) {
      this.hotelService.updateHotel({
        id: this.currentHotelId,
        ...formValue
      });
    } else {
      this.hotelService.addHotel(formValue);
    }

    // Clear the form and navigate back
    this.form.reset();
    this.router.navigate(['/hotels']);
  }

  deleteHotel(id: number): void {
    this.hotelService.deleteHotel(id);
  }

  bookHotel(hotelId: number): void {
    const message = this.hotelService.bookHotelById(hotelId);
    console.log(message);
  }
}
