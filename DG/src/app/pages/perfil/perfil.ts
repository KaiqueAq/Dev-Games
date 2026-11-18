import { Component } from '@angular/core';

interface ProfileStat {
  label: string;
  value: string;
  icon: string;
  caption: string;
}

interface FeaturedGame {
  title: string;
  platform: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  readonly player = {
    name: 'Player One',
    initials: 'P1',
    level: 12,
    progress: 72,
    nextLevel: 13,
    bio: 'Explorando mundos, uma partida de cada vez.',
  };

  readonly stats: ProfileStat[] = [
    { label: 'Jogos', value: '12', icon: '🎮', caption: 'na biblioteca' },
    { label: 'Tempo de jogo', value: '86 h', icon: '⏱', caption: 'no total' },
    { label: 'Conquistas', value: '28', icon: '🏆', caption: 'desbloqueadas' },
  ];

  readonly featuredGames: FeaturedGame[] = [
    {
      title: 'Alley Cat',
      platform: 'MS-DOS',
      image: 'assets/Alley Cat.jpg',
      description: 'Clássico em destaque',
    },
    {
      title: 'Battle City',
      platform: 'NES',
      image: 'assets/Battle City.jpg',
      description: 'Favorito da comunidade',
    },
    {
      title: 'Bounce Tales',
      platform: 'Java ME',
      image: 'assets/Bounce-Tales.jpg',
      description: 'Na lista para jogar',
    },
  ];
}
