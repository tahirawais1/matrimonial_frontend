import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageService } from '../theme/services/page.service';
import { AuthenticationService } from '../theme/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthenticationService]
})
export class SignupComponent implements OnInit {

  loginFormGroup;
  signUpFormGroup;
  mySignupData;

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
          placeholder: "Password",
          formControlName: "password",
        },
      ]
    }
  ];


  signupData = [

    {
      // formTitle: "Account Information",

      formFields: [

        {
          inputType: "textField",
          placeholder: "Enter your Mobile Number",
          formControlName: "phone",
        },
        {
          inputType: "textField",
          placeholder: "Enter your Email",
          formControlName: "email",
        },

        {
          inputType: "textField",
          placeholder: "Chose your Password",
          formControlName: "password",
        },
        
      ]
    },

    {
      // formTitle: "Personal Information",

      formFields: [
        {
          inputType: "radioBtn",
          option: [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' }],
          formControlName: "gender",
        },
        {
          inputType: "textField",
          placeholder: "Name",
          formControlName: "name",
        },
        {
          inputType: "dropdown",
          placeholder: "Age",
          option:
            [
              { value: '18 years', text: '18 years' },
              { value: '19 years', text: '19 years' },
              { value: '20 years', text: '20 years' },
              { value: '21 years', text: '21 years' },
              { value: '22 years', text: '22 years' },
              { value: '23 years', text: '23 years' },
              { value: '24 years', text: '24 years' },
              { value: '25 years', text: '25 years' },
              { value: '26 years', text: '26 years' },
              { value: '27 years', text: '27 years' },
              { value: '28 years', text: '28 years' },
              { value: '29 years', text: '29 years' },
              { value: '30 years', text: '30 years' },
              { value: '31 years', text: '31 years' },
              { value: '32 years', text: '32 years' },
              { value: '33 years', text: '33 years' },
              { value: '34 years', text: '34 years' },
              { value: '35 years', text: '35 years' },
              { value: '36 years', text: '36 years' },
              { value: '37 years', text: '37 years' },
              { value: '38 years', text: '38 years' },
              { value: '39 years', text: '39 years' },
              { value: '40 years', text: '40 years' },
              { value: '41 years', text: '41 years' },
              { value: '42 years', text: '42 years' },
              { value: '43 years', text: '43 years' },
              { value: '44 years', text: '44 years' },
              { value: '45 years', text: '45 years' },
              { value: '46 years', text: '46 years' },
              { value: '47 years', text: '47 years' },
              { value: '48 years', text: '48 years' },
              { value: '49 years', text: '49 years' },
              { value: '50 years', text: '50 years' },
            ],
          formControlName: "age",
        },
        {
          inputType: "dropdown",
          placeholder: "Martial Status",
          option:
            [
              { value: 'Never Married', text: 'Never Married' },
              { value: 'Divorced', text: 'Divorced' },
              { value: 'Widowed', text: 'Widowed' },
              { value: 'Second Mariage', text: 'Second Marriage' },
            ],
          formControlName: "martial_status",
        },
        
      ]
    }
  ];


  constructor(private authService: AuthenticationService, private pageService: PageService, private dataService: DataService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    })

    this.signUpFormGroup = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      name: new FormControl(''),
      featured: new FormControl(''),
      gender: new FormControl(''),
      cast: new FormControl(''),
      image: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      address: new FormControl(''),
      religion: new FormControl(''),
      community: new FormControl(''),
      mother_tongue: new FormControl(''),
      martial_status: new FormControl(''),
      height: new FormControl(''),
      educationLevel: new FormControl(''),
      educationField: new FormControl(''),
      profession: new FormControl(''),
      income: new FormControl(''),
      profileCreatedBy: new FormControl(''),
      age: new FormControl(''),
    })
  }


  onLogin() {
    var output = this.authService.checklogin(this.loginFormGroup.value)
    
    if (output == true) {
      debugger;
      this.router.navigate(['/settings'], { queryParams: { page: localStorage.getItem('loginid') } });
    }
    else {
      debugger
      console.log('error')
    }
  }
  redirectTo(url) {
    this.pageService.changeRoute(url);
  }
  onSignup() {
    this.dataService.signupAPI(this.signUpFormGroup.value).subscribe((res): any => {
      console.log(res)
      localStorage.setItem('loginid',`${res}`)
      
      if (res) {
        this.router.navigate(['/settings'], { queryParams: { page: res } });
        window.scrollTo(0, 0);
      }
    }, error => {
      console.dir(error);
    });

  }

}

