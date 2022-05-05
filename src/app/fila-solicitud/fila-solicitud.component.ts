import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `
    <button (click)="borrar(solicitud)">Borrar</button>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  @Input()
  solicitud: any;

  @Output()
  solicitudBorrada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(solicitud: any) {
    this.solicitudBorrada.emit(solicitud)
  }
}
