import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formTitle',
  templateUrl: './formTitle.component.html',
  styleUrls: ['./formTitle.component.css']
})
export class FormTitleComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
