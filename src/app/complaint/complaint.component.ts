import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  intresetform;
 
  formData = [
    {
      // formTitle: "Login",
      formFields: [
        {
          inputType: "textField",
          placeholder: "Email",
          formControlName: "email",
        },
        {
          inputType: "textField",
          placeholder: "Complaint First Name",
          formControlName: "firstName",
        },
        {
          inputType: "textField",
          placeholder: "Complaint Last Name",
          formControlName: "lastName",
        },
        {
          inputType: "dropdown",
          placeholder: "Complaint Issue",
          option:
            [
              { value: 'Abandoned Vehicle', text: 'Abandoned Vehicle' },
              { value: 'Snow Removal (Seniors & Disabled)', text: 'Snow Removal (Seniors & Disabled)' },
              { value: 'Assault', text: 'Assault' },
              { value: 'Auto Break In', text: 'Auto Break In' },
              { value: 'Auto Theft', text: 'Safety Patrol' },
              { value: 'Broken/Missing Traffic Control Signs/Street Signs', text: 'Broken/Missing Traffic Control Signs/Street Signs' },
              { value: 'Child Abuse', text: 'Child Abuse' },
              { value: 'Dirty Street/ Street Dumping/Unkempt Property', text: 'Dirty Street/ Street Dumping/Unkempt Property' },
              { value: 'Domestic Abuse', text: 'Domestic Abuse' },
              { value: 'Electrical/Internet Issues', text: 'Electrical/Internet Issues' },
              { value: 'Graffiti', text: 'Graffiti' },
              { value: 'Harassment', text: 'Harassment' },
              { value: 'Illegal Home Conversion', text: 'Illegal Home Conversion' },
              { value: 'Missing/Abandoned Pets', text: 'Missing/Abandoned Pets' },
              { value: 'Missing Mail/Package Theft', text: 'Missing Mail/Package Theft'},
              { value: 'Missing Person', text: 'Missing Person' },
              { value: 'Parking Issues', text: 'Parking Issues' },
              { value: 'Pothole/Street Depression/Cave-in', text: 'Pothole/Street Depression/Cave-in' },
              { value: 'Request For Speed Bump/Other Traffic Control Devices', text: 'Request For Speed Bump/Other Traffic Control Devices' },
              { value: 'Request For One Way Street', text: 'Request For One Way Street' },
              { value: 'Request For Cleanup', text: 'Request For Cleanup' },
              { value: 'Robbery', text: 'Robbery' },
              { value: 'Other', text: 'Other' },
            ],
          formControlName: "complaint",
        },
        {
          inputType: "textField",
          placeholder: "Date of Occurrence",
          formControlName: "date",
        },
        {
          inputType: "textField",
          placeholder: "Address of Occurrence (Nearest Address)",
          formControlName: "address",
        },
        {
          inputType: "textArea",
          placeholder: "Details of Complaint",
          formControlName: "details",
        },
        
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.intresetform = this.formBuilder.group({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      complaint: new FormControl(''),
      date: new FormControl(''),
      address: new FormControl(''),
      details: new FormControl(''),
    })
  }

}
