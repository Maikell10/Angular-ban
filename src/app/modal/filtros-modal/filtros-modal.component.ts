import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-filtros-modal',
  templateUrl: './filtros-modal.component.html',
  styleUrls: ['./filtros-modal.component.css'],
  providers: [],
})
export class FiltrosModalComponent implements OnInit {
  filtroData = {
    banco: {
      bancoId: '',
    },
    mecanismo: {
      mecanismoId: '',
    },
    formaPago: {
      formaPagoId: '',
    },
    divisa: {
      divisaId: '',
    },
    canal: {
      canalId: '',
    },
    cajero: {
      cajeroId: '',
    },
  };

  bancos: any = [
    {
      bancoId: '1',
      banco: 'BANESCO',
    },
    {
      bancoId: '2',
      banco: 'PROVINCIAL',
    },
    {
      bancoId: '3',
      banco: 'VENEZUELA',
    },
  ];

  mecanismos: any = [
    {
      mecanismoId: '1',
      mecanismo: 'MEC1',
    },
    {
      mecanismoId: '2',
      mecanismo: 'MEC2',
    },
  ];

  formaPagos: any = [
    {
      formaPagoId: '1',
      formaPago: 'FP1',
    },
    {
      formaPagoId: '2',
      formaPago: 'FP2',
    },
  ];

  divisas: any = [
    {
      divisaId: '1',
      divisa: 'USD',
    },
    {
      divisaId: '2',
      divisa: 'EUR',
    },
  ];

  canales: any = [
    {
      canalId: '1',
      canal: 'CAN1',
    },
    {
      canalId: '2',
      canal: 'CAN2',
    },
  ];

  cajeros: any = [
    {
      cajeroId: '1',
      cajero: 'CAJ1',
    },
    {
      cajeroId: '2',
      cajero: 'CAJ2',
    },
  ];

  carga: any = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (
      localStorage['banco'] != 'undefined' &&
      localStorage['banco'] != undefined
    ) {
      let banco: any = localStorage.getItem('banco');
      this.filtroData.banco.bancoId = JSON.parse(banco).bancoId;
    }
    if (
      localStorage['mecanismo'] != 'undefined' &&
      localStorage['mecanismo'] != undefined
    ) {
      let mecanismo: any = localStorage.getItem('mecanismo');
      this.filtroData.mecanismo.mecanismoId = JSON.parse(mecanismo).mecanismoId;
    }
    if (
      localStorage['formaPago'] != 'undefined' &&
      localStorage['formaPago'] != undefined
    ) {
      let formaPago: any = localStorage.getItem('formaPago');
      this.filtroData.formaPago.formaPagoId = JSON.parse(formaPago).formaPagoId;
    }
    if (
      localStorage['divisa'] != 'undefined' &&
      localStorage['divisa'] != undefined
    ) {
      let divisa: any = localStorage.getItem('divisa');
      this.filtroData.divisa.divisaId = JSON.parse(divisa).divisaId;
    }
    if (
      localStorage['canal'] != 'undefined' &&
      localStorage['canal'] != undefined
    ) {
      let canal: any = localStorage.getItem('canal');
      this.filtroData.canal.canalId = JSON.parse(canal).canalId;
    }
    if (
      localStorage['cajero'] != 'undefined' &&
      localStorage['cajero'] != undefined
    ) {
      let cajero: any = localStorage.getItem('cajero');
      this.filtroData.cajero.cajeroId = JSON.parse(cajero).cajeroId;
    }
  }

  guardarFiltros() {
    this.carga = true;
    console.log(this.filtroData);

    let banco = this.bancos.filter(
      (banco: any) => banco.bancoId === this.filtroData.banco.bancoId
    );
    localStorage.setItem('banco', JSON.stringify(banco[0]));

    let mecanismo = this.mecanismos.filter(
      (mecanismo: any) =>
        mecanismo.mecanismoId === this.filtroData.mecanismo.mecanismoId
    );
    localStorage.setItem('mecanismo', JSON.stringify(mecanismo[0]));

    let formaPago = this.formaPagos.filter(
      (formaPago: any) =>
        formaPago.formaPagoId === this.filtroData.formaPago.formaPagoId
    );
    localStorage.setItem('formaPago', JSON.stringify(formaPago[0]));

    let divisa = this.divisas.filter(
      (divisa: any) => divisa.divisaId === this.filtroData.divisa.divisaId
    );
    localStorage.setItem('divisa', JSON.stringify(divisa[0]));

    let canal = this.canales.filter(
      (canal: any) => canal.canalId === this.filtroData.canal.canalId
    );
    localStorage.setItem('canal', JSON.stringify(canal[0]));

    let cajero = this.cajeros.filter(
      (cajero: any) => cajero.cajeroId === this.filtroData.cajero.cajeroId
    );
    localStorage.setItem('cajero', JSON.stringify(cajero[0]));

    setTimeout(() => {
      window.location.reload();
      this.carga = false;
    }, 1000);
  }

  cerrarMod() {
    this.dialog.closeAll();
  }
}
