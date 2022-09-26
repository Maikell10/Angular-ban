import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient, private bnIdle: BnNgIdleService) {}

  // servicio login ldap
  public loginLdap(username: string, password: string) {
    let user = {
      username,
      password,
    };
    return this.http.post(`${environment.baseLocal}/api/api`, user, {
      responseType: 'text',
    });
  }

  // servicio prueba servidor
  public servicioPrueba(username: string) {
    let data = {
      MsgRqHdr: {
        MessageDate: '2009-01-09',
        MessageTime: '10:14:07',
        RequestId: '12345',
        SourceChannelCode: 'BNK',
        SupervisorCode: 'BAN1740P00',
        OperatorCode: 'BAN1740W01',
        NetworkTrnInfo: {
          RegisterNumber: '1263',
          TransactionCode: '1999',
          TransactionDate: '2006-08-19',
          TransactionTime: '18:48:33',
          BankId: '53',
          AgencyCode: '1740',
          ChannelId: 'BNK',
          ChannelUserId: 'BNK',
        },
        ApplicantData: {
          Application: 'BANKCASH',
        },
        VBProtocol: {
          VBProtocolInd: 'true',
          TransactionInd: 'false',
        },
      },
      Customer: {
        CustId: {
          ParentUserId: username,
        },
      },
    };
    return this.http.post(
      `/FCMASecurityOutAppSvc/FCMASecurityOutAppSvc_RestService/readUsers`,
      data
    );
  }

  // set user en localStorage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public isLoggedIn() {
    let userStr = localStorage.getItem('user');
    if (userStr == undefined || userStr === null || userStr === '') {
      return false;
    } else {
      return true;
    }
  }

  // cerrar sesión y eliminar token del localStorage
  public logOut() {
    localStorage.removeItem('user');
    localStorage.clear();
    return true;
  }

  public getUserRole() {
    return 'ADMIN';
  }

  public checkSession() {
    this.bnIdle.startWatching(60 * 60).subscribe((isTimedOut) => {
      if (isTimedOut) {
        localStorage.clear();
        Swal.fire({
          title: 'Sesión finalizada!',
          text: 'Ha terminado su tiempo de sesión',
          icon: 'info',
          confirmButtonColor: '#007953',
        }).then(() => {
          window.location.reload();
        });
      }
    });
  }
}
