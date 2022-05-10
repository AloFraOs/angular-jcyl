import { InicioComponent } from './inicio/inicio.component';
import { CentrosComponent } from './centros/centros.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'centros', component: CentrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
