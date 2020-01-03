import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-techStack',
  templateUrl: './techStack.component.html',
  styleUrls: ['./techStack.component.css']
})
export class TechStackComponent implements OnInit {

  @Input() heading='Technology index';
  @Input() subHeading='We use modern, proven technologies and approaches to build performant and scalable digital products for mobile and web. Check out the technologies we rely on.';
  @Input() btnText='See our tech stack';

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }


  routeToServices(url) {
    this.pageService.changeRoute(url);
  }
}



