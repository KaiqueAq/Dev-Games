import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Catalago } from './pages/catalago/catalago';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Catalago],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DG');
}
