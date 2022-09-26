import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner-load',
  templateUrl: './spinner-load.component.html',
  styleUrls: ['./spinner-load.component.css'],
})
export class SpinnerLoadComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor() {}

  ngOnInit(): void {}
}
