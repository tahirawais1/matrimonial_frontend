import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../theme/services/data.service';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService , private pageService: PageService) { }

  ngOnInit() {
    

  }
  redirectTo(url) {
    this.pageService.changeRoute(url);
  }
}
