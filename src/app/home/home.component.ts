import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../theme/services/data.service';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  list;

  constructor(private router: Router, private dataService: DataService , private pageService: PageService) { }

  ngOnInit() {
    this.list = this.dataService.listinings.listItems;

  }

  routeToServices(item) {
    this.router.navigate(['/profileDetail'], { queryParams: { page: item.id } });
    window.scrollTo(0, 0);
  }

}
