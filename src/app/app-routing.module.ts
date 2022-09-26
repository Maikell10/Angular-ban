import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalladoComponent } from './pages/monitor/detallado/detallado.component';
import { ResumenComponent } from './pages/monitor/resumen/resumen.component';
import { GetInGuardGuard } from './services/get-in-guard.guard';
import { CheckSessionGuardGuard } from './services/guard/check-session-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [CheckSessionGuardGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [GetInGuardGuard],
  },
  {
    path: 'monitor-detallado',
    pathMatch: 'full',
    component: DetalladoComponent,
    canActivate: [GetInGuardGuard],
  },
  {
    path: 'monitor-resumen',
    pathMatch: 'full',
    component: ResumenComponent,
    canActivate: [GetInGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
