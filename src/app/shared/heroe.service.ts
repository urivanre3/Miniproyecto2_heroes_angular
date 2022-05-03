import { Injectable } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../misheroes';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private heroes:Heroe[]=HEROES;

  constructor() { }

  getUnHeroe(posicion:number):Heroe{
    return this.heroes[posicion];
  }

  searchUnHeroe(nomheroe:string):number{
    let index = this.heroes.findIndex(p=> p.nombre === nomheroe);
    return index;
  }

  getHeroes():Heroe[]{
    return this.heroes;
  }

}
