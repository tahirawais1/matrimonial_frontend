import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    // @Input() tabs = [];
    // @Input() selectedIndex;
    // @Input() backLink;
    // @Output() change = new EventEmitter<any>();

    // currentRoute;
    // showInput = false;
  
    constructor() { }

  ngOnInit() {
    // this.currentRoute = this.router.url;
  }

  // tabClick(MatTabChangeEvent) {
  //   console.log(MatTabChangeEvent);
  //   this.change.emit(MatTabChangeEvent.tab.textLabel);
// }
}
