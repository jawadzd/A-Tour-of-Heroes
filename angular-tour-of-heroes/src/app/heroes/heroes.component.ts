import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [CommonModule, FormsModule, HeroDetailComponent,RouterOutlet, RouterModule]
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,private messageService: MessageService) { }
  getHeroes(): void { 
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
