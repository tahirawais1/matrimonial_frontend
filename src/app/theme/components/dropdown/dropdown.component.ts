
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})

export class DropdownComponent implements OnInit {

  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname: FormGroup;

  constructor() {
    //
  }

  ngOnInit() {

  }

  onSelectionChange(args) {
    // if (args) {
    //   debugger;
    //   this.rformgroup;
    // }
  }

}
