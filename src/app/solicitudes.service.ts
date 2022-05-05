import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  getSolicitudes() {
    return [{nombre: 'Pedro', apellidos: 'Picapiedra', nacimiento: new Date()},
            {nombre: 'Pablo', apellidos: 'Marmol', nacimiento: new Date(1968, 6, 12)},
            {nombre: 'Wilma', apellidos: 'Picapiedra', nacimiento: new Date(1970, 2, 30)}
           ];
  }
}
