import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-inputControlSelector",
  templateUrl: "./inputControlSelector.component.html",
  styleUrls: ["./inputControlSelector.component.scss"]
})
  export class InputControlSelectorComponent implements OnInit {

  @Input() generateForm = [];
  @Input() myFromGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    //
  }

  checkType(args) {
    if (args instanceof Array) {
      return "array";
    } else {
      return "object";
    }
  }
}
