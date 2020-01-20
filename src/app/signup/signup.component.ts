import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginFormGroup;
  signUpFormGroup;

  formData = [
    {
      formTitle: "Login",
      formFields: [
        {
          inputType: "textField",
          placeholder: "username",
          formControlName: "username",
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
      formTitle: "Personal Information",

      formFields: [
        {
          inputType: "textField",
          placeholder: "First Name",
          formControlName: "first_name",
        },
        {
          inputType: "textField",
          placeholder: "Last Name",
          formControlName: "last_name",
        },
        {
          inputType: "textField",//Radio Button

          placeholder: "Gender",
          formControlName: "gender",
        },
        {
          inputType: "textField", //Date picker
          placeholder: "Date Of Birth",
          formControlName: "dob",
        },
        {
          inputType: "textField",
          placeholder: "height",
          formControlName: "height",
        },
        {
          inputType: "textField",
          placeholder: "Cast",
          formControlName: "cast",
        },
        {
          inputType: "textField",
          placeholder: "Religion",
          formControlName: "religion",
        },
        {
          inputType: "textField",
          placeholder: "Mother Tongue",
          formControlName: "motherTongue",
        },
      ]
    },
    {
      formTitle: "Account Information",

      formFields: [

        {
          inputType: "textField",
          placeholder: "Enter your Mobile Number",
          formControlName: "mobile",
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
      formTitle: "Education",

      formFields: [
        {
          inputType: "textField",
          placeholder: "Institue",
          formControlName: "institute",
        },
        {
          inputType: "textField",
          placeholder: "Education Level",
          formControlName: "educationLevel",
        },
        {
          inputType: "textField",
          placeholder: "Education Field",
          formControlName: "educationField",
        },
      ]
    },
    {
      formTitle: "Profession",

      formFields: [
        {
          inputType: "textField",
          placeholder: "Profession",
          formControlName: "profession",
        },
        {
          inputType: "textField",
          placeholder: "Company",
          formControlName: "company",
        },
        {
          inputType: "textField",
          placeholder: "Income",
          formControlName: "income",
        },
      ]
    },
    {
      formTitle: "Address",

      formFields: [
        {
          inputType: "textField",
          placeholder: "City",
          formControlName: "city",
        },
        {
          inputType: "textField",
          placeholder: "Country",
          formControlName: "country",
        },
        {
          inputType: "textField",//Radio Button
          placeholder: "Martial Status",
          formControlName: "martialStatus",
        },
      ]
    }
  ];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl(''),
    })

    this.signUpFormGroup = this.formBuilder.group({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      height: new FormControl(''),
      cast: new FormControl(''),
      religion: new FormControl(''),
      motherTongue: new FormControl(''),
      mobile: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      institute: new FormControl(''),
      educationLevel: new FormControl(''),
      educationField: new FormControl(''),
      profession: new FormControl(''),
      company: new FormControl(''),
      income: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      martialStatus: new FormControl(''),
    })
  }

  onLogin() {
  }
}
