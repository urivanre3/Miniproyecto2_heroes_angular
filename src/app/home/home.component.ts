import { Component, OnInit, NgModule } from '@angular/core';
import { Miembro } from '../miembro';
import { MiembroService } from '../shared/miembro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miembro:Miembro={
    nombre:'',
    sexo:'',
    correo:'',
    fecha:''
  };

  constructor(private miembroService:MiembroService) { 

  }

  ngOnInit(): void {
    this.miembro=this.miembroService.nuevoMiembro();
  }
  nuevoMiembro():void{
    this.miembroService.agregarMiembro(this.miembro);
    this.miembro=this.miembroService.nuevoMiembro();
  }

}
