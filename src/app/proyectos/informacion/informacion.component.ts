import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosDataService } from '../service/proyectos-data.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  param: string = '';
  proyecto: any;

  constructor(
    private arouter: ActivatedRoute,
    private proyectosDataService: ProyectosDataService,
  ) {
    let id = '';
    console.log(arouter);
    arouter.params.subscribe(({nombre}) => {
      console.log(nombre);
      id = nombre;
    });
    this.param = decodeURI(id);    
  }

  ngOnInit(): void {
    this.proyecto = this.proyectosDataService.getProyecto(this.param);
    console.log(this.proyecto);
  }
}
