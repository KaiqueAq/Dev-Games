import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunidade } from './comunidade';

describe('Comunidade', () => {
  let component: Comunidade;
  let fixture: ComponentFixture<Comunidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comunidade],
    }).compileComponents();

    fixture = TestBed.createComponent(Comunidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
