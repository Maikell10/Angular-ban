import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  opened: any = false;

  constructor() {}

  toggleRightSidenav() {
    this.opened = !this.opened;
  }
}
