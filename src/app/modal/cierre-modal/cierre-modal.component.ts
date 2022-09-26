import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cierre-modal',
  templateUrl: './cierre-modal.component.html',
  styleUrls: ['./cierre-modal.component.css'],
})
export class CierreModalComponent implements OnInit {
  carga: boolean = false;

  formData = {
    codigo: '',
    descripcion: '',
    mecanismo: '',
    formaPago: '',
    cajero: '',
    moneda: '',
    canal: '',
    fecha: '',
    hora: '',
  };

  constructor() {}

  ngOnInit(): void {}

  formSubmit() {}
}
