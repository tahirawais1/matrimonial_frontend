import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-textArea',
  templateUrl: './textArea.component.html',
  styleUrls: ['./textArea.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname;
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }

}
