import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inyec-abs-modal',
  templateUrl: './inyec-abs-modal.component.html',
  styleUrls: ['./inyec-abs-modal.component.css'],
})
export class InyecAbsModalComponent implements OnInit {
  carga: boolean = false;

  formData = {
    monto: '',
    concepto: '',
    inyAbs: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.formData.inyAbs = 'inyeccion';
  }

  formSubmit() {}
}
