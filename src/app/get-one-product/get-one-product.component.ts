import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { TourService } from '../Service/tour.service';

@Component({
  selector: 'app-get-one-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './get-one-product.component.html',
  styleUrls: ['./get-one-product.component.css'] // 'styleUrl' should be 'styleUrls'
})
export class GetOneProductComponent implements OnInit {
  id!: string;
  tour!: any;

  constructor(private route: ActivatedRoute, private ts: TourService) {} // Corrected service injection

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.tour = this.ts.getTourById(+this.id); // Corrected method call to use the service method
    });
  }
}
