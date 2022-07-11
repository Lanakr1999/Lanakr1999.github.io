import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDayWeatherComponent } from './five-day-weather.component';

describe('FiveDayWeatherComponent', () => {
  let component: FiveDayWeatherComponent;
  let fixture: ComponentFixture<FiveDayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveDayWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
