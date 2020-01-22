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
        {
          inputType: "textField",
          placeholder: "Confirm your Password",
          formControlName: "confirmpassword",
        },
      ]
    },

    {
      formTitle: "Personal Information",

      formFields: [
        {
          inputType:"radioBtn",
          option : [ 
            {value:'male' , label:'Male'},
            {value:'female' , label:'Female'} ] ,
          formControlName: "gender",
        },
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
          inputType: "datePicker",
          placeholder: "Date Of Birth",
          formControlName: "dob",
        },
        {
          inputType:"dropdown",
          placeholder: "Martial Status",
          option:
          [ 
            {value:'neverMarried' , text:'Never Married'},
            {value:'divorced' , text:'Divorced'},
            {value:'widowed' , text:'Widowed'}, 
            {value:'secondMariage' , text:'Second Marriage'}, 
          ] ,
          formControlName: "martialStatus",
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
        {
          inputType:"dropdown",
          placeholder: "Mother Tongue",
          option:
          [ 
            {value:'english' , text:'English'},
            {value:'urdu' , text:'Urdu'},
            {value:'punjabi' , text:'Punjabi'}, 
            {value:'sindhi' , text:'Sindhi'}, 
            {value:'pashto' , text:'Pashto'}, 
            {value:'saraiki' , text:'Saraiki'}, 
          ] ,
          formControlName: "motherTongue",
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
          inputType:"dropdown",
          placeholder: "Education Level",
          option:
          [ 
            {value:'diploma' , text:'Diploma'},
            {value:'matric' , text:'Matric'},
            {value:'tntermediate' , text:'Intermediate'}, 
            {value:'graduate' , text:'Graduate'}, 
            {value:'masters' , text:'Masters'}, 
          ] ,
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
          placeholder: "Mailing Address",
          formControlName: "address",
        },
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
      mobile: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl(''),

      first_name: new FormControl(''),
      last_name: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      height: new FormControl(''),
      cast: new FormControl(''),
      religion: new FormControl(''),
      martialStatus: new FormControl(''),
      motherTongue: new FormControl(''),

      institute: new FormControl(''),
      educationLevel: new FormControl(''),
      educationField: new FormControl(''),

      profession: new FormControl(''),
      company: new FormControl(''),
      income: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    })
  }

  onLogin() {
  }
}
