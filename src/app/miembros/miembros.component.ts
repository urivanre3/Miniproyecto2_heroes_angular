import { Component, OnInit } from '@angular/core';
/* imports agregados */
import { Miembro } from '../miembro';
import { MiembroService } from '../shared/miembro.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

  misMiembros:Miembro[]=[];

  constructor(private miservicio:MiembroService  ) {
    console.log("contructor de miembros");
   }

  ngOnInit(): void {
    
    console.log("ngOnInit de Miembros");
    this.misMiembros=this.miservicio.getMiembros();
    console.log(this.misMiembros);
  }

}
