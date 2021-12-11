import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageService } from '../theme/services/page.service';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

membersList;

  constructor(private pageService: PageService, private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getListing().subscribe(data => {
      this.membersList = data
    }, (error) => {
      console.log(error);
    });

  }

  redirectTo(url) {
    this.pageService.changeRoute(url);
  }

  routeToServices(item) {
    this.router.navigate(['/profileDetail'], { queryParams: { page: item.id } });
    window.scrollTo(0, 0);
  }


}
