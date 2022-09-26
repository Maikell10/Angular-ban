import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CierreModalComponent } from 'src/app/modal/cierre-modal/cierre-modal.component';
import { FiltrosModalComponent } from 'src/app/modal/filtros-modal/filtros-modal.component';
import { InyecAbsModalComponent } from 'src/app/modal/inyec-abs-modal/inyec-abs-modal.component';
import { ParametrosModalComponent } from 'src/app/modal/parametros-modal/parametros-modal.component';
import { ReportesModalComponent } from 'src/app/modal/reportes-modal/reportes-modal.component';
import { LoginService } from 'src/app/services/login/login.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    public dialog: MatDialog,
    public sidebarService: SidebarService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.logOut();
    window.location.reload();
  }

  openFiltros(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(FiltrosModalComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openParams(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ParametrosModalComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openInyecAbs(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(InyecAbsModalComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openCierre(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CierreModalComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openReportes(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ReportesModalComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
