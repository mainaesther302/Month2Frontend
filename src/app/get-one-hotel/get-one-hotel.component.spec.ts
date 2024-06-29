import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneHotelComponent } from './get-one-hotel.component';

describe('GetOneHotelComponent', () => {
  let component: GetOneHotelComponent;
  let fixture: ComponentFixture<GetOneHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOneHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
