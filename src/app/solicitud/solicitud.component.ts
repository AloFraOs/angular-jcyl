import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "Pedro Picapiedra", valor: ''};

  constructor() {
    setInterval(() => {
      this.solicitud.valor = '' + Math.random();
      }, 2000)
  }

  ngOnInit(): void {
  }

}
