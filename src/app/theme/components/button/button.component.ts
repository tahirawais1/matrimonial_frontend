import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ns-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  
  @Input() text;
  constructor() { }

  ngOnInit() {
    
  }

  onTaped() {
  }

}
