import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-snowremoval',
  templateUrl: './snowremoval.component.html',
  styleUrls: ['./snowremoval.component.scss']
})
export class SnowremovalComponent implements OnInit {
  intresetform;
 
  formData = [
    {
      // formTitle: "Login",
      formFields: [
        {
          inputType: "dropdown",
          placeholder: "Are you 65 Above",
          option:
            [
              { value: 'Yes', text: 'Yes' },
              { value: 'No', text: 'No' },
  
            ],
          formControlName: "age",
        },
        {
          inputType: "textField",
          placeholder: "Full Name",
          formControlName: "name",
        },
        {
          inputType: "textField",
          placeholder: "Phone Number",
          formControlName: "number",
        },
        {
          inputType: "textArea",
          placeholder: "Address",
          formControlName: "address",
        },
        
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.intresetform = this.formBuilder.group({
      age: new FormControl(''),
      name: new FormControl(''),
      number: new FormControl(''),
      address: new FormControl(''),
    })
  }

}
