import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToursPageComponent } from './tours-page/tours-page.component';
import { HotelsPageComponent } from '../app/hotels-page/hotels-page.component';
import { GetOneProductComponent } from './get-one-product/get-one-product.component';
import { BookingComponent } from './booking/booking.component';
import { TourHomeComponent } from './tour-home/tour-home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    // {path:'login', component:LoginComponent}
    {path: 'register', component:RegisterComponent},
    {path:'tours-page', component:ToursPageComponent},
    { path: 'tours/:id', component: GetOneProductComponent },
    { path: 'add-tour-home', component:TourHomeComponent },
  { path: 'booking', component: BookingComponent },
    {path:"hotels-page", component:HotelsPageComponent},
    { path: 'hotels', component: HotelsPageComponent },
  { path: 'hotels/:id', component: GetOneHotelComponent },
  {path: 'hotels',component: HotelsPageComponent},


  
];
