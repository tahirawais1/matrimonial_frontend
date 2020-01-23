import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  currentRoute = '';
  tabs=[
    {name:'Home' ,route:'' },
    {name:'Sign Up' ,route:'signup', status:'active' },
    {name:'Listing' ,route:'listings',status:''  },
  ]
  isContactUs = true;
  constructor(private router: Router, private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  redirectTo(url) {
    this.pageService.changeRoute(url);
  }
}
