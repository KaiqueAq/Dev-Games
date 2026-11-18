import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NewsArticle {
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  readTime: string;
}

@Component({
  selector: 'app-noticias',
  imports: [RouterLink],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  readonly featuredArticle: NewsArticle = {
    category: 'ESPECIAL DO CATÁLOGO',
    title: 'Clássicos no navegador: redescubra jogos que marcaram época',
    summary:
      'Uma seleção editorial para revisitar jogos clássicos e conhecer projetos que os tornam acessíveis diretamente pelo navegador.',
    image: 'assets/Battle City.jpg',
    imageAlt: 'Arte de Battle City, jogo clássico de tanques',
    readTime: 'Especial',
  };

  readonly articles: NewsArticle[] = [
    {
      category: 'RETRO',
      title: 'Alley Cat: desafios simples, partidas cheias de personalidade',
      summary:
        'Relembre o charme dos jogos de plataforma da era MS-DOS e descubra o título na seleção do catálogo.',
      image: 'assets/Alley Cat.jpg',
      imageAlt: 'Capa de Alley Cat',
      readTime: 'Leitura rápida',
    },
    {
      category: 'COMUNIDADE',
      title: 'Doom e a criatividade que mantém os clássicos em movimento',
      summary:
        'Mods e projetos de fãs mostram como comunidades continuam experimentando com jogos conhecidos.',
      image: 'assets/doom.jpg',
      imageAlt: 'Capa de Doom',
      readTime: 'Leitura rápida',
    },
    {
      category: 'NO CATÁLOGO',
      title: 'Bounce Tales: um clássico mobile para conhecer no navegador',
      summary:
        'Veja a entrada de Bounce Tales no catálogo e confira a versão jogável indicada na página do jogo.',
      image: 'assets/Bounce-Tales.jpg',
      imageAlt: 'Capa de Bounce Tales',
      readTime: 'Leitura rápida',
    },
  ];
}
