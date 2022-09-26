import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  carga: any = false;

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username.trim() === '' ||
      this.loginData.username.trim() === null
    ) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() === '' ||
      this.loginData.password.trim() === null
    ) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    this.carga = true;

    setTimeout(() => {
      this.loginService.setUser({ username: this.loginData.username });
      this.loginService.loginStatusSubject.next(true);
      this.router.navigate(['/home']);
      this.carga = false;
    }, 1000);

    // this.loginService.loginLdap(this.loginData.username, this.loginData.password).subscribe((data: any) => {
    //   console.log(data)
    //   this.loginService.setUser({username: this.loginData.username});

    //   if (this.loginService.getUserRole() == 'ADMIN') {
    //     // ADMIN
    //     this.router.navigate(['home']);
    //     this.loginService.loginStatusSubject.next(true);
    //   } else if (this.loginService.getUserRole() == 'NORMAL') {
    //     // USER DASHBOARD
    //   } else {
    //     this.loginService.logOut();
    //   }

    // }, err => {
    //   console.log(err)
    // })
  }
}
