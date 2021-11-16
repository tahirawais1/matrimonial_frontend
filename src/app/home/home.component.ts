import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../theme/services/data.service';
import { PageService } from '../theme/services/page.service';
import {MatDialog} from '@angular/material/dialog';
import { SnowremovalComponent } from '../snowremoval/snowremoval.component';
import { ComplaintComponent } from '../complaint/complaint.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  list;

  constructor(public dialog: MatDialog, private router: Router, private dataService: DataService , private pageService: PageService) { }

  ngOnInit() {
    this.dataService.getListing().subscribe(data => {
      this.list = data;
    },(error) => {
      console.log(error);
    });
    console.log(this.list);

  }
  redirectTo(url) {
    this.pageService.changeRoute(url);
  }
  snowremoval(){
    const dialogRef = this.dialog.open(SnowremovalComponent ,{
       width: '70vw',
       height:'90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  complaint(){
    const dialogRef = this.dialog.open(ComplaintComponent ,{
       width: '70vw',
       height:'90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  routeToServices(item) {
    this.router.navigate(['/profileDetail'], { queryParams: { page: item.id } });
    window.scrollTo(0, 0);
  }

}
