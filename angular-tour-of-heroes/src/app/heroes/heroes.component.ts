import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
    
  }

}
