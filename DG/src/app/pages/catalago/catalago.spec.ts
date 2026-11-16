import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalago } from './catalago';

describe('Catalago', () => {
  let component: Catalago;
  let fixture: ComponentFixture<Catalago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catalago],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
