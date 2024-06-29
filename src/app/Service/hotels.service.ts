import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotelsSubject = new BehaviorSubject<any[]>([
    {
      id: 1,
      image: 'https://example.com/hotel1.jpg',
      name: 'Ocean View Hotel',
      location: 'Nyali',
      rating: 4,
      description: 'Ocean View Hotel offers stunning views of the ocean.',
    },
    {
      id: 2,
      image: 'https://example.com/hotel2.jpg',
      name: 'Mountain Retreat',
      location: 'Nyali',
      rating: 5,
      description: 'Mountain Retreat is the perfect getaway in the mountains.',
    },
  ]);

  private hotels$ = this.hotelsSubject.asObservable();

  constructor() {}

  getHotels(): Observable<any[]> {
    return this.hotels$;
  }

  getHotelById(id: number): Observable<any> {
    return this.hotels$.pipe(
      map(hotels => hotels.find(hotel => hotel.id === id))
    );
  }

  addHotel(hotel: any): void {
    const currentHotels = this.hotelsSubject.value;
    const newHotel = { ...hotel, id: currentHotels.length ? Math.max(...currentHotels.map(h => h.id)) + 1 : 1 };
    this.hotelsSubject.next([...currentHotels, newHotel]);
  }

  updateHotel(updatedHotel: any): void {
    const currentHotels = this.hotelsSubject.value;
    const index = currentHotels.findIndex(hotel => hotel.id === updatedHotel.id);
    if (index !== -1) {
      currentHotels[index] = updatedHotel;
      this.hotelsSubject.next([...currentHotels]);
    }
  }

  deleteHotel(id: number): void {
    const currentHotels = this.hotelsSubject.value;
    const updatedHotels = currentHotels.filter(hotel => hotel.id !== id);
    this.hotelsSubject.next([...updatedHotels]);
  }

  bookHotelById(id: number): string {
    const hotel = this.hotelsSubject.value.find(h => h.id === id);
    return hotel ? `Hotel with ID ${id} has been booked.` : `Hotel with ID ${id} not found.`;
  }
}
