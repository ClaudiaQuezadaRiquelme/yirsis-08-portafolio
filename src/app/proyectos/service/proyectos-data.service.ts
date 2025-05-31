import { Injectable } from '@angular/core';
import { proyectos } from 'src/app/shared/data/Proyectos.data';

@Injectable({
  providedIn: 'root'
})
export class ProyectosDataService {

  private _data = proyectos;

  constructor() { }

  get data() {
    return this._data;
  }

  getProyecto(nombre: string) {
    let proyecto = this._data.filter((p) => p.nombre === nombre );
    console.log("proyecto:",proyecto);
    return proyecto[0];
  }
}
