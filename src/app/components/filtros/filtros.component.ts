import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css'],
})
export class FiltrosComponent implements OnInit {
  banco: any = [];
  mecanismo: any = [];
  formaPago: any = [];
  divisa: any = [];
  canal: any = [];
  cajero: any = [];

  constructor() {}

  ngOnInit(): void {
    if (localStorage['banco'] !== 'undefined') {
      this.banco = localStorage.getItem('banco');
      this.banco = JSON.parse(this.banco);
    }
    if (localStorage['mecanismo'] !== 'undefined') {
      this.mecanismo = localStorage.getItem('mecanismo');
      this.mecanismo = JSON.parse(this.mecanismo);
    }
    if (localStorage['formaPago'] !== 'undefined') {
      this.formaPago = localStorage.getItem('formaPago');
      this.formaPago = JSON.parse(this.formaPago);
    }
    if (localStorage['divisa'] !== 'undefined') {
      this.divisa = localStorage.getItem('divisa');
      this.divisa = JSON.parse(this.divisa);
    }
    if (localStorage['canal'] !== 'undefined') {
      this.canal = localStorage.getItem('canal');
      this.canal = JSON.parse(this.canal);
    }
    if (localStorage['cajero'] !== 'undefined') {
      this.cajero = localStorage.getItem('cajero');
      this.cajero = JSON.parse(this.cajero);
    }
  }
}
