import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComprasDetalladoModalComponent } from 'src/app/modal/compras-detallado-modal/compras-detallado-modal.component';
import { VentasDetalladoModalComponent } from 'src/app/modal/ventas-detallado-modal/ventas-detallado-modal.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  bb: string;
  aa: string;
  tasa: string;
  moneda: string;
  cnp: string;
  cliente: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-detallado',
  templateUrl: './detallado.component.html',
  styleUrls: ['./detallado.component.css'],
})
export class DetalladoComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'progress',
    'fruit',
    'bb',
    'aa',
    'tasa',
    'moneda',
    'cnp',
    'cliente',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openVentas(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(VentasDetalladoModalComponent, {
      width: '800px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openCompras(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ComprasDetalladoModalComponent, {
      width: '800px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    bb: Math.round(Math.random() * 100).toString(),
    aa: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    tasa: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    moneda: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    cnp: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    cliente: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
