import { Component } from '@angular/core';
import {HEROES} from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],

  standalone: true,
  imports: [
    NgFor,
  ],
})

export class HeroesComponent {
  heroes = HEROES;
}
