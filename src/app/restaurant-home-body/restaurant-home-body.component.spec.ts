import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHomeBodyComponent } from './restaurant-home-body.component';

describe('RestaurantHomeBodyComponent', () => {
  let component: RestaurantHomeBodyComponent;
  let fixture: ComponentFixture<RestaurantHomeBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantHomeBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
