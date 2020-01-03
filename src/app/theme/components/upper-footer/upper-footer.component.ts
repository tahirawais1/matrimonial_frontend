import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-upper-footer',
  templateUrl: './upper-footer.component.html',
  styleUrls: ['./upper-footer.component.css']
})
export class UpperFooterComponent implements OnInit {

  @Input() heading="Get to know us!" ;
  @Input() subHeading="It’s a pleasure to have you on our website. Let us know if there’s an opportunity for us to do something together." ;
  @Input() btnText="Drop us a message"; 
  constructor(private pageService: PageService) { }

  ngOnInit() {
  }


  routeToServices(url) {
    this.pageService.changeRoute(url);
  }

}
