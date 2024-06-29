import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourService } from '../Service/tour.service';

@Component({
  selector: 'app-tour-home',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class TourHomeComponent implements OnInit {
  form!: FormGroup;
  tours!: any[];
  editMode = false;
  editedTourId!: number;

  constructor(private fb: FormBuilder, private ts: TourService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      destination: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
    this.loadTours();
  }

  loadTours(): void {
    this.tours = this.ts.getTours();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const newTour = this.form.value;
      if (this.editMode) {
        newTour.id = this.editedTourId;
        this.ts.updateTour(newTour);
      } else {
        this.ts.addTour(newTour);
      }
      this.form.reset();
      this.loadTours();
      this.editMode = false;
    }
  }

  onEdit(tour: any): void {
    this.editMode = true;
    this.editedTourId = tour.id;
    this.form.patchValue(tour);
  }

  onDelete(id: number): void {
    this.ts.deleteTour(id);
    this.loadTours();
  }
}
