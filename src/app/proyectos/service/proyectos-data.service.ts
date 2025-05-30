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
}
