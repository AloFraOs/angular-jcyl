import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  ngOnInit(): void {
  }

  solicitudes: any;
  constructor(private solicitudesService: SolicitudesService) {
    this.solicitudes = solicitudesService.getSolicitudes();
    solicitudesService.getSolicitudes().then(
    x => this.solicitudes = x)
  }

  borrarSolicitud(solicitud: any) {
    this.solicitudes = this.solicitudes.filter((solicitudExistente: any) => solicitudExistente.nombre != solicitud.nombre)
  }

}
