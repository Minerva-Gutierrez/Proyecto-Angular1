import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*crear clase*/
  hero: Hero={
    id:1,
    name:'hulk',
    edad: 40,
    superpoder:'super fuerza',
    universo:'MARVEL',
    identidad:'BRUCE'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
