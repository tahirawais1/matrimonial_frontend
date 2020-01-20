import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  list;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.list = this.dataService.listinings;

  }

}
