import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `
    <h2>Centro</h2>
    <h3>Nombre: {{centro.nombre}}</h3>
    <h3>Dirección: {{centro.direccion}}</h3>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {nombre:'Vega del Prado', direccion:'Valladolid'}

  constructor() { }

  ngOnInit(): void {
  }

}
