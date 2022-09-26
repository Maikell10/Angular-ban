import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService],
})
export class HomeComponent implements OnInit {
  intCamb = {
    subastaActiva: 1,
    montoOfertado: 1,
    posicionDisponible: 1,
    posicionLiquidada: 1,
  };

  remesa = {
    cantidad: 10,
    monto: 50,
  };

  mesaCamb = {
    posicion: 'texto',
    acumulada: 'texto',
    delDia: 'texto',
    numOp: 'texto',
    monto: 'texto',
    compra: 'texto',
    venta: 'texto',
  };

  constructor(
    private loginService: LoginService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loginService.servicioPrueba('mepirela').subscribe(
      (data: any) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );

    if (
      localStorage['user'] != 'undefined' &&
      localStorage['user'] != undefined
    ) {
      this.loginService.checkSession();
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
