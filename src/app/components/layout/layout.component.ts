import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  //showFiller = false;

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
    opened: false,
  });

  isLoggedIn: boolean = false;

  user: any;

  constructor(
    private _formBuilder: FormBuilder,
    private loginService: LoginService,
    public sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (
      localStorage['user'] != 'undefined' &&
      localStorage['user'] != undefined
    ) {
      let user: any = localStorage.getItem('user');
      this.user = JSON.parse(user).username;
    }
  }

  ngDoCheck(): void {
    if (!this.isLoggedIn) {
      this.isLoggedIn = this.loginService.isLoggedIn();
      if (
        localStorage['user'] != 'undefined' &&
        localStorage['user'] != undefined
      ) {
        let user: any = localStorage.getItem('user');
        this.user = JSON.parse(user).username;
      }
    }
  }
}
