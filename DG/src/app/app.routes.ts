import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalago } from './pages/catalago/catalago';
import { Jogos } from './pages/jogos/jogos';
import { Comunidade } from './pages/comunidade/comunidade';
import { Noticias } from './pages/noticias/noticias';
import { Perfil } from './pages/perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'catalogo', component: Catalago },
  { path: 'jogos', component: Jogos },
  { path: 'comunidade', component: Comunidade },
  { path: 'noticias', component: Noticias },
  { path: 'perfil', component: Perfil }
];
