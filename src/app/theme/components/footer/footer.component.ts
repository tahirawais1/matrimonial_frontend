import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscribe

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }
  subscribeEmail = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Enter your Email",
          formControlName: "",
        },
      ]
    }
  ];
  routeToServices(url) {
    this.pageService.changeRoute(url);
  }
}
