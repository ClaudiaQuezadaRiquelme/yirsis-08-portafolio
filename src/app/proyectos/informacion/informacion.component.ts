import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  param: string = '';

  constructor(
    private arouter: ActivatedRoute
  ) {
    let id = '';
    console.log(arouter);
    arouter.params.subscribe(({nombre}) => {
      console.log(nombre);
      id = nombre;
    });
    this.param = decodeURI(id);    
  }
}
