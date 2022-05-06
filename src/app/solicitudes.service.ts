import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private httpClient: HttpClient) { }


  getSolicitudes() {
    /* Ejercicio 14
    return [{nombre: 'Pedro', apellidos: 'Picapiedra', nacimiento: new Date()},
            {nombre: 'Pablo', apellidos: 'Marmol', nacimiento: new Date(1968, 6, 12)},
            {nombre: 'Wilma', apellidos: 'Picapiedra', nacimiento: new Date(1970, 2, 30)}
           ];
    */

    /* Ejercicio 15 */
    const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';
    return this.httpClient.get(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
      .toPromise()
      .then((x: any) =>
        x.items.map((y: any) => y.fields)
      )
  }


}
