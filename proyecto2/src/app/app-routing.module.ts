import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'home',component:InicioComponent},
  {path:'alumnos',component:AlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
