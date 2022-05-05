import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre:'', apellidos:'', valor: ''};

  constructor() {
    setInterval(() => {
      this.solicitud.valor = '' + Math.random();
      }, 2000)
  }

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
}
