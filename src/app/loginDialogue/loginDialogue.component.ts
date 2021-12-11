import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-loginDialogue',
  templateUrl: './loginDialogue.component.html',
  styleUrls: ['./loginDialogue.component.scss']
})
export class LoginDialogueComponent implements OnInit {

  intresetform;
 
  formData = [
    {
      // formTitle: "Login",
      formFields: [
        {
          inputType: "textField",
          placeholder: "User ID",
          formControlName: "user_id",
        },
        {
          inputType: "textField",
          placeholder: "Password",
          formControlName: "password",
        },
        
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder, private pageService: PageService,
    public dialogRef: MatDialogRef<LoginDialogueComponent>,
) { }

  ngOnInit() {
    this.intresetform = this.formBuilder.group({
      age: new FormControl(''),
      name: new FormControl(''),
      number: new FormControl(''),
      address: new FormControl(''),
    })
  }
  onLogin(){
    this.dialogRef.close();
    this.pageService.changeRoute('volunteer');
  }

}
