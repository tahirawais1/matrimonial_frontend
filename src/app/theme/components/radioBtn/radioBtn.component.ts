import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-radioBtn',
  templateUrl: './radioBtn.component.html',
  styleUrls: ['./radioBtn.component.css']
})
export class RadioBtnComponent implements OnInit {

  @Input() options;
  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname;
  constructor() { }

  ngOnInit() {
  }

}
