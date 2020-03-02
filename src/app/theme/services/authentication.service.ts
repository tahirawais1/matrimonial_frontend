import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private dataService: DataService) { }
  idofLogin;





  checklogin(value) {
    debugger;
    this.dataService.login(value).subscribe((res): any => {
      console.log(res)
      this.idofLogin = res[0].id;
    });

    if (this.idofLogin) {
      window.scrollTo(0, 0);
      localStorage.setItem('loginid', `${this.idofLogin}`);
      return true;
    }
    else return false;

  }


}

