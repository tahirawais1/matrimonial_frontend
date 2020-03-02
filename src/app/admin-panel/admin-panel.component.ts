import { Component, OnInit } from '@angular/core';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }
  redirectTo(url) {
    this.pageService.changeRoute(url);
  }
}
