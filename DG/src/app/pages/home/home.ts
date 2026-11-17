import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FeaturedGame {
  id: number;
  title: string;
  genre: string;
  rating: string;
  price: string;
  cover: string;
}

interface NewsPreview {
  id: number;
  tag: string;
  title: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featuredGames: FeaturedGame[] = [
    {
      id: 1,
      title: 'Roblox',
      genre: 'RPG • Ação',
      rating: '4.9',
      price: 'R$ 149,90',
      cover: 'assets/roblox.png'
    },
    {
      id: 2,
      title: 'Counter-Strike 2',
      genre: 'Competitivo • FPS',
      rating: '4.7',
      price: 'Gratuito',
      cover: 'assets/Counter.jpg'
    },
    {
      id: 3,
      title: 'Ace Combat',
      genre: 'Exploração • Sci-Fi',
      rating: '4.8',
      price: 'R$ 89,90',
      cover: 'assets/Ace_Combat.webp'
    }
  ];

  latestNews: NewsPreview[] = [
    {
      id: 1,
      tag: 'Atualização',
      title: 'Patch 2.4 traz novo mapa competitivo e modo cooperativo para Cyber Odyssey',
      date: 'Hoje'
    },
    {
      id: 2,
      tag: 'E-Sports',
      title: 'Inscrições abertas para o Campeonato Comunitário Dev-Games de Fim de Ano',
      date: 'Ontem'
    }
  ];
}
