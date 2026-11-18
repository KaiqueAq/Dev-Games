import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Noticias } from './noticias';

describe('Noticias', () => {
  let component: Noticias;
  let fixture: ComponentFixture<Noticias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticias],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Noticias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the editorial notice, featured story, and article cards', () => {
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toContain('Notícias e histórias');
    expect(page.querySelector('.demo-note')?.textContent).toContain('Conteúdo demonstrativo');
    expect(page.querySelectorAll('.article-card').length).toBe(3);
  });
});
