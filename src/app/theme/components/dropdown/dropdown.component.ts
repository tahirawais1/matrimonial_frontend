
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';
export interface Option {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})

export class DropdownComponent implements OnInit {

  
  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname;
  @Input() placeholder;
  @Input() options: Option[] = [];
  @Input() multiple = false;
  constructor() {
    //
  }

  ngOnInit() {
  }

  onSelectionChange() {
    // if (args) {
    //   debugger;
    //   this.rformgroup;
    // }
  }

}
