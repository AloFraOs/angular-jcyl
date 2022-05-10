import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
    <h1>Bienvenido al curso Framework Javascript. Angular (Mayo 2022)</h1>
  `,
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
