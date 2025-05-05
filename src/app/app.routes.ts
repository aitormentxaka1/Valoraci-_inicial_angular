import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ListadoComponent } from './parametros/listado/listado.component';
import { DetallesComponent } from './parametros/detalles/detalles.component';
import { FormularioComponent } from './parametros/formulario/formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'parametros', component: ListadoComponent},
  { path: 'detalle/:id', component: DetallesComponent },
  { path: 'editar/:id', component: FormularioComponent },
  { path: 'crear', component: FormularioComponent },
];
