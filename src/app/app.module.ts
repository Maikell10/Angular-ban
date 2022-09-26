import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { LayoutComponent } from './components/layout/layout.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { getSpanishPaginatorIntl } from './services/spanish-paginator-intl';

import { MatCarouselModule } from 'ng-mat-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { FiltrosModalComponent } from './modal/filtros-modal/filtros-modal.component';
import { ParametrosModalComponent } from './modal/parametros-modal/parametros-modal.component';
import { InyecAbsModalComponent } from './modal/inyec-abs-modal/inyec-abs-modal.component';
import { CierreModalComponent } from './modal/cierre-modal/cierre-modal.component';
import { ReportesModalComponent } from './modal/reportes-modal/reportes-modal.component';

import { BnNgIdleService } from 'bn-ng-idle';
import { SpinnerLoadComponent } from './components/spinner-load/spinner-load.component';
import { DetalladoComponent } from './pages/monitor/detallado/detallado.component';
import { VentasDetalladoModalComponent } from './modal/ventas-detallado-modal/ventas-detallado-modal.component';
import { ComprasDetalladoModalComponent } from './modal/compras-detallado-modal/compras-detallado-modal.component';
import { ResumenComponent } from './pages/monitor/resumen/resumen.component'; // import bn-ng-idle service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    FiltrosComponent,
    SidebarMenuComponent,
    FiltrosModalComponent,
    ParametrosModalComponent,
    InyecAbsModalComponent,
    CierreModalComponent,
    ReportesModalComponent,
    SpinnerLoadComponent,
    DetalladoComponent,
    VentasDetalladoModalComponent,
    ComprasDetalladoModalComponent,
    ResumenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [
    BnNgIdleService,
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
