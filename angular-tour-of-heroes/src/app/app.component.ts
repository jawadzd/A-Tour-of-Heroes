import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,MessagesComponent, HeroesComponent,AppRoutingModule]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
