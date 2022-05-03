import { Injectable } from '@angular/core';
import { Miembro } from '../miembro';
import { MIEMBROS } from '../mismiembros';


@Injectable({
  providedIn: 'root'
})
export class MiembroService {

  private miembros:Miembro[]=MIEMBROS;

  constructor() {
    this.miembros=JSON.parse(localStorage.getItem("data") || '[]');
  }
  
  agregarMiembro(miembro:Miembro){
    this.miembros.push(miembro);
    localStorage.setItem('data',JSON.stringify(this.miembros));
  }

  nuevoMiembro(): Miembro {
    return {      
      nombre: '',
      sexo: '',
      correo: '',
      fecha: ''
    };

  }

  
  getMiembros():Miembro[]{
    return this.miembros;
  }


}
