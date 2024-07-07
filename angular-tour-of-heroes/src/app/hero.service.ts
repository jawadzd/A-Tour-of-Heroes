import { Injectable } from '@angular/core';
import { Hero } from '../app/heroes/hero';
import { Observable ,of } from 'rxjs';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes():Observable <Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
