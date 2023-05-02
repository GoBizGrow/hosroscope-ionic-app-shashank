import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoroscopeDetailsPage } from './horoscope-details.page';

describe('HoroscopeDetailsPage', () => {
  let component: HoroscopeDetailsPage;
  let fixture: ComponentFixture<HoroscopeDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HoroscopeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
