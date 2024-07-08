import { Component ,OnInit,Input} from '@angular/core';
import { HeroesComponent } from "../heroes/heroes.component";
import { HEROES } from '../mock-heroes';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { Hero } from '../heroes/hero';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule,HeroesComponent],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  hero: Hero | undefined;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
