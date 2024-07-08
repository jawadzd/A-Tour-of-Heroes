import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  imports: [CommonModule, RouterOutlet, RouterModule]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}