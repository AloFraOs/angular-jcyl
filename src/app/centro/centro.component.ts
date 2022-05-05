import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `
    <h2>Centro</h2>
    <h3>Nombre: {{centroInicial.nombre}}</h3>
    <h3>Dirección: {{centroInicial.direccion}}</h3>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {nombre:'Vega del Prado', direccion:'Valladolid'}

  @Input()
  centroInicial: {nombre:string, direccion:string} = {nombre:'', direccion:''}

  constructor() { }

  ngOnInit(): void {
  }

}
