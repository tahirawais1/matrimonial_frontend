import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageService } from '../theme/services/page.service';
import { AuthenticationService } from '../theme/services/authentication.service';
import { MatDialog } from '@angular/material';
import { LoginDialogueComponent } from '../loginDialogue/loginDialogue.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthenticationService]
})
export class SignupComponent implements OnInit {

  intresetform;
  signUpFormGroup;
  mySignupData;

  formData = [
    {
      // formTitle: "Login",
      formFields: [
        {
          inputType: "textField",
          placeholder: "Full Name",
          formControlName: "name",
        },
        {
          inputType: "dropdown",
          placeholder: "What program are you interested in volunteering with",
          option:
            [
              { value: 'Food Pantry', text: 'Food Pantry' },
              { value: 'Special Events', text: 'Special Events' },
              { value: 'Graffiti Removal', text: 'Graffiti Removal' },
              { value: 'Snow Removal', text: 'Snow Removal' },
              { value: 'Safety Patrol', text: 'Safety Patrol' },
              { value: '23 years', text: '23 years' },
            ],
          formControlName: "service",
        },
        {
          inputType: "textField",
          placeholder: "Phone Number",
          formControlName: "number",
        },
        {
          inputType: "textField",
          placeholder: "Email",
          formControlName: "email",
        },
        {
          inputType: "dropdown",
          placeholder: "Do you have Facebook Messenger",
          option:
            [
              { value: 'Yes', text: 'Yes' },
              { value: 'No', text: 'No' },
            ],
          formControlName: "havefacebook",
        },
      ]
    }
  ];


  signupData = [
    {
      formFields: [
        {
          inputType: "radioBtn",
          option: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }],
          formControlName: "eligible",
        },
        {
          inputType: "textField",
          placeholder: "Full Legal Name",
          formControlName: "name",
        },
        {
          inputType: "textField",
          placeholder: "Phone Number",
          formControlName: "number",
        },

        {
          inputType: "textField",
          placeholder: "Email Address",
          formControlName: "email",
        },
        {
          inputType: "textArea",
          placeholder: "A brief description explaining why you wish to volunteer with us",
          formControlName: "description",
        },

      ]
    },

  ];


  constructor(public dialog: MatDialog , private authService: AuthenticationService, private pageService: PageService, private dataService: DataService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.intresetform = this.formBuilder.group({
      name: new FormControl(''),
      service: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl(''),
      havefacebook: new FormControl(''),
    })

    this.signUpFormGroup = this.formBuilder.group({
      eligible: new FormControl(''),
      name: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    })
  }

  openloginBox() {

    const dialogRef = this.dialog.open(LoginDialogueComponent, {
      width: '30vw',
      height: '55vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onLogin() {
    this.authService.checklogin(this.intresetform.value)

    // if (output == true) {
    //   debugger;
    //   this.router.navigate(['/settings'], { queryParams: { page: localStorage.getItem('loginid') } });
    // }
    // else {
    //   debugger
    //   console.log('error')
    // }
  }

  redirectTo(url) {
    this.pageService.changeRoute(url);
  }

  onSignup() {
    this.dataService.signupAPI(this.signUpFormGroup.value).subscribe((res): any => {
      console.log(res)
      localStorage.setItem('loginid', `${res}`)

      if (res) {
        this.router.navigate(['/settings'], { queryParams: { page: res } });
        window.scrollTo(0, 0);
      }
    }, error => {
      console.dir(error);
      console.log("error")
    });

  }

}

