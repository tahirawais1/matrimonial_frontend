import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datePicker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.css']
})
export class DatePickerComponent implements OnInit {
 
  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname;
  @Input() placeholder;
  constructor() { }

  ngOnInit() {
  }

}
