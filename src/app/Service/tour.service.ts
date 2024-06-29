import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private tours = [
    {
      id: 1,
      image: 'https://www.istockphoto.com/photo/perfect-conditions-with-bright-blue-ocean-and-white-sand-beach-on-a-sunny-day-gm1477967321-506360980?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Focean%2F&utm_term=ocean',
      name: 'Ocean City',
      destination: 'Nyali',
      description: 'Ocean City beach is one of the best sites in the world',
      price: 10000,
    },
    {
      id: 2,
      image: 'https://www.istockphoto.com/photo/trail-runner-ascends-alpine-path-in-swiss-mountain-landscape-gm1567426291-527666357?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fmountain%2F&utm_term=mountain',
      name: 'Mountain View',
      destination: 'Nyali',
      description: 'Mountain View is one of the best sites in the world',
      price: 10000,
    },
  ];

  private bookings: any[] = []; // To store bookings

  constructor() {}

  getTours() {
    return this.tours;
  }

  getTourById(id: number) {
    return this.tours.find((tour) => tour.id === id);
  }

  bookTourById(id: number): string {
    const tour = this.getTourById(id);
    if (tour) {
      this.bookings.push(tour);
      return `Tour with id ${id} booked successfully!`;
    } else {
      return `Tour with id ${id} not found.`;
    }
  }

  getBookings() {
    return this.bookings;
  }

  addTour(tour: any): void {
    const newTour = { ...tour, id: this.tours.length + 1 };
    this.tours.push(newTour);
  }

  updateTour(updatedTour: any): void {
    const index = this.tours.findIndex((tour) => tour.id === updatedTour.id);
    if (index !== -1) {
      this.tours[index] = updatedTour;
    }
  }

  deleteTour(id: number): void {
    this.tours = this.tours.filter((tour) => tour.id !== id);
  }
}
