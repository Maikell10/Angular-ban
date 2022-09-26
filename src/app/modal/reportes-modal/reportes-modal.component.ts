import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-modal',
  templateUrl: './reportes-modal.component.html',
  styleUrls: ['./reportes-modal.component.css'],
})
export class ReportesModalComponent implements OnInit {
  carga: boolean = false;

  formData = {
    tipo: '',
    fecha: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.formData.tipo = '1';
  }

  formSubmit() {}
}
