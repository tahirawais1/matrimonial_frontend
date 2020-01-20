import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-textField",
  templateUrl: "./textField.component.html",
  styleUrls: ["./textField.component.scss"],
})
export class TextFieldComponent implements OnInit {
  
  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname;
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }

  // get invalidControl() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].invalid)
  //     return true;
  //   else{
  //  return false;
  //   }
  // }

  // get errorRequired() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].errors &&
  //     this.rformgroup.controls[this.rformcontrolname].errors.required) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // get errorFormate() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].errors &&
  //     this.rformgroup.controls[this.rformcontrolname].errors.email) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // get errorLength() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].errors &&
  //     this.rformgroup.controls[this.rformcontrolname].errors.minlength) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
