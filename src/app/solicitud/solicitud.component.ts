import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../solicitudes.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre:'', apellidos:'', valor: ''};

  /*
  constructor() {
    setInterval(() => {
      this.solicitud.valor = '' + Math.random();
      }, 2000)
  }
  */

  ngOnInit(): void {
  }

  /* Ejercicio 5 */
  saludar(saludo:string): void {
    alert(saludo)
  }

  /* Ejercicio 6 */
  actualizarNombre($event: KeyboardEvent): void {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value
  }

  actualizarApellidos($event: KeyboardEvent): void {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellidos = element.value
  }

  validaFormu(): boolean {
    return this.solicitud.nombre.length < 1 || this.solicitud.apellidos.length < 1
  }

  enviar(): void {
    console.info(this.solicitud)
  }

  /* Ejercicio 8 */
  solicitudesOld = [{nombre: 'Pedro', apellidos: 'Picapiedra', nacimiento: new Date()},
                 {nombre: 'Pablo', apellidos: 'Marmol', nacimiento: new Date(1968, 6, 12)},
                 {nombre: 'Wilma', apellidos: 'Picapiedra', nacimiento: new Date(1970, 2, 30)}
                ];

  /* Ejercicio 10 */
  centro: {nombre:string, direccion:string} = {nombre:'Iñigo de Toro', direccion:'Valladolid'}

  /* Ejercicio 13
  borrarSolicitud(solicitud: any) {
    this.solicitudes = this.solicitudes.filter(solicitudExistente => solicitudExistente.nombre != solicitud.nombre)
  }
  */

  /* Ejercicio 14
  solicitudes;
  constructor(private solicitudesService: SolicitudesService) {

    setInterval(() => {
      this.solicitud.valor = '' + Math.random();
      }, 2000)

    this.solicitudes = solicitudesService.getSolicitudes();
  }
  */

  /* Ejercicio 15 */
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
