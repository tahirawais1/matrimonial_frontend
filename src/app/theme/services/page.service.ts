import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private router: Router) { }

  get currentRoute() {
    return localStorage.getItem('_currentRoute');

  }

  set currentRoute(currentRoute) {
    localStorage.setItem('_currentRoute', currentRoute);
  }

  changeRoute(route) {
    this.currentRoute = route;
    this.router.navigate([route]);
    setTimeout(() => {
      window.scrollTo(0, 0);
      // window.location.reload();
    }, 50);
  }


}
