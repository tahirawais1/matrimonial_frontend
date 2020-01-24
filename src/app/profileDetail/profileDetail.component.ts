import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profileDetail',
  templateUrl: './profileDetail.component.html',
  styleUrls: ['./profileDetail.component.scss']
})
export class ProfileDetailComponent implements OnInit {


  detail;
  sub: any;
  items
  page;

  constructor(private dataService: DataService , private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.detail = this.dataService.listinings;

    
    this.sub = this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 0;
        this.detail = this.dataService.getProfileByTitle(this.page);
      });
      debugger;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
   

  
