import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TourHomeComponent } from './tour-home/tour-home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent } from './login/login.component';

import { HotelsComponent} from './hotels/hotels.component';
import { ShortenDescription } from '../app/pipes/shortenDescription';
import { HomeComponent } from './home/home.component';
import { ToursPageComponent } from './tours-page/tours-page.component';
import { HotelsPageComponent } from './hotels-page/hotels-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,TourHomeComponent,HeaderComponent,FooterComponent,RegisterComponent,LoginComponent, HotelsComponent,HomeComponent,ToursPageComponent,HotelsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Month2Frontend';
}
