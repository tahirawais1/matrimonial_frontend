import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthenticationService } from '../theme/services/authentication.service';
import { DataService } from '../theme/services/data.service';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-loginDialogue',
  templateUrl: './loginDialogue.component.html',
  styleUrls: ['./loginDialogue.component.scss']
})
export class LoginDialogueComponent implements OnInit {

  loginForm;

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

  constructor(public dataService: DataService, private formBuilder: FormBuilder, private pageService: PageService,
    public dialogRef: MatDialogRef<LoginDialogueComponent>,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user_id: new FormControl(''),
      password: new FormControl(''),
    })
  }
  onLogin() {
    this.dataService.login(this.loginForm.value).subscribe((res): any => {
      console.log(res)
      // this.idofLogin = res[0].id;
    });
    // if (output == true) {
    //   console.log('working')
    //   // debugger;
    //   // this.router.navigate(['/settings'], { queryParams: { page: localStorage.getItem('loginid') } });
    // }
    // else {
    //   console.log('error')
    // }
    // this.dialogRef.close();
    // this.pageService.changeRoute('volunteer');
  }

}
