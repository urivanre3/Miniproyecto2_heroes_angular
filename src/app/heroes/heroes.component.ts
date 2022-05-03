import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
/* servicio inyectado */
import { HeroeService } from '../shared/heroe.service';

 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  misHeroes:Heroe[]=[];

  constructor(public miservicio: HeroeService) { 
    console.log("contructor de heroes");
  }

  ngOnInit(): void {

    console.log("ngOnInit de Heroes");
    this.misHeroes=this.miservicio.getHeroes();
    console.log(this.misHeroes);
  }

}
