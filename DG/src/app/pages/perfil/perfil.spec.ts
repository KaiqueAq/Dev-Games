import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil } from './perfil';

describe('Perfil', () => {
  let component: Perfil;
  let fixture: ComponentFixture<Perfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfil],
    }).compileComponents();

    fixture = TestBed.createComponent(Perfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the demo profile and featured games', () => {
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toContain('Player One');
    expect(page.querySelectorAll('.stat-card').length).toBe(3);
    expect(page.querySelectorAll('.game-card').length).toBe(3);
    expect(page.querySelector('.demo-notice')?.textContent).toContain('demonstrativo');
  });
});
