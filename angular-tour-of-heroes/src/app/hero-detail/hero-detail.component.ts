import { Component ,OnInit,Input} from '@angular/core';
import { HeroesComponent } from "../heroes/heroes.component";
import { HEROES } from '../mock-heroes';
import { CommonModule } from '@angular/common';
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

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit() {
  }

}
