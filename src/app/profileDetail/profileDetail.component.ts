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
  page;


  constructor(private dataService: DataService , private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
     this.sub = this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 0;
      });

      this.dataService.getOneList(this.page).subscribe(data => {
        this.detail = data;
        console.log(this.detail);
      },(error) => {
        console.log(error);
      });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
   

  
