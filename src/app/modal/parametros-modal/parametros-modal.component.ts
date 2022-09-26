import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametros-modal',
  templateUrl: './parametros-modal.component.html',
  styleUrls: ['./parametros-modal.component.css'],
})
export class ParametrosModalComponent implements OnInit {
  parametroData = {
    compra: '',
    venta: '',
    compraT: '',
    ventaT: '',
    minCompra: '',
    maxCompra: '',
    minVenta: '',
    maxVenta: '',
    cierre: '',
  };

  carga: any = false;

  constructor() {}

  ngOnInit(): void {}

  formSubmit() {
    var Xmas95 = new Date(this.parametroData.cierre);
    var day = Xmas95.getDate();
    var mes = Xmas95.getMonth() + 1;
    var anio = Xmas95.getFullYear();
    var hora = Xmas95.getHours();
    var min = Xmas95.getMinutes();
    console.log(this.parametroData.cierre, day, mes, anio, hora, min);

    this.carga = true;

    setTimeout(() => {
      window.location.reload();
      this.carga = false;
    }, 1000);
  }
}
