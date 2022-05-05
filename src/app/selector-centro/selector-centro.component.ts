import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  template: `
    <input (keyup)="centro($event)"  [value]="centroSeleccionado.nombre">

    <div *ngFor="let centro of centrosFiltrados">
      <p (click)="seleccionarCentro(centro)">{{centro.nombre}}</p>
    </div>
  `,
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros = [{nombre: "José Zorrilla", direccion:'Valladolid'},
             {nombre: "Calderón de la Barca", direccion:'Palencia'},
             {nombre: "Iñigo de Toro", direccion:'Burgos'}];

  centrosFiltrados: any = [];
  centroSeleccionado= {nombre: ''};

  constructor() { }

  ngOnInit(): void {
  }

  centro($event: any) {
    this.centrosFiltrados = [...this.centros].filter(centro =>
      centro.nombre.includes($event.target.value))
  }

  seleccionarCentro(centro: any) {
    this.centroSeleccionado = centro;
    this.centrosFiltrados = [];
  }
}
