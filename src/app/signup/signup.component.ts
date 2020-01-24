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
  mySignupData;

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
        {
          inputType: "dropdown",
          placeholder: "Profile Created By",
          option:
            [
              { value: 'parents', text: 'Parents   ' },
              { value: 'siblings', text: 'Siblings   ' },
              { value: 'relative', text: 'Relative   ' },
            ],
          formControlName: "martialStatus",
        },
      ]
    },

    {
      formTitle: "Personal Information",

      formFields: [
        {
          inputType: "radioBtn",
          option: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }],
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
              { value: '18', text: '18 years' },
              { value: '19', text: '19 years' },
              { value: '20', text: '20 years' },
              { value: '21', text: '21 years' },
              { value: '22', text: '22 years' },
              { value: '23', text: '23 years' },
              { value: '24', text: '24 years' },
              { value: '25', text: '25 years' },
              { value: '26', text: '26 years' },
              { value: '27', text: '27 years' },
              { value: '28', text: '28 years' },
              { value: '29', text: '29 years' },
              { value: '30', text: '30 years' },
              { value: '31', text: '31 years' },
              { value: '32', text: '32 years' },
              { value: '33', text: '33 years' },
              { value: '34', text: '34 years' },
              { value: '35', text: '35 years' },
              { value: '36', text: '36 years' },
              { value: '37', text: '37 years' },
              { value: '38', text: '38 years' },
              { value: '39', text: '39 years' },
              { value: '40', text: '40 years' },
              { value: '41', text: '41 years' },
              { value: '42', text: '42 years' },
              { value: '43', text: '43 years' },
              { value: '44', text: '44 years' },
              { value: '45', text: '45 years' },
              { value: '46', text: '46 years' },
              { value: '47', text: '47 years' },
              { value: '48', text: '48 years' },
              { value: '49', text: '49 years' },
              { value: '50', text: '50 years' },
            ],
          formControlName: "age",
        },
        {
          inputType: "dropdown",
          placeholder: "Martial Status",
          option:
            [
              { value: 'neverMarried', text: 'Never Married' },
              { value: 'divorced', text: 'Divorced' },
              { value: 'widowed', text: 'Widowed' },
              { value: 'secondMariage', text: 'Second Marriage' },
            ],
          formControlName: "martialStatus",
        },
        {
          inputType: "dropdown",
          placeholder: "Height",
          option:
            [
              { value: '134', text: "4'5 - 134cm" },
              { value: '137', text: "4'6 - 137cm" },
              { value: '139', text: "4'7 - 139cm" },
              { value: '142', text: "4'8 - 142cm" },
              { value: '144', text: "4'9 - 144cm" },
              { value: '147', text: "4'0 - 147cm" },
              { value: '149', text: "4'1 - 149cm" },
              { value: '152', text: "5'0 - 152cm" },
              { value: '154', text: "5'1 - 154cm" },
              { value: '157', text: "5'2 - 157cm" },
              { value: '160', text: "5'3 - 160cm" },
              { value: '162', text: "5'4 - 162cm" },
              { value: '165', text: "5'5 - 165cm" },
              { value: '167', text: "5'6 - 167cm" },
              { value: '170', text: "5'7 - 170cm" },
              { value: '172', text: "5'8 - 172cm" },
              { value: '175', text: "5'9 - 175cm" },
              { value: '177', text: "5'0 - 177cm" },
              { value: '180', text: "5'1 - 180cm" },
              { value: '182', text: "6'0 - 182cm" },
              { value: '185', text: "6'1 - 185cm" },
              { value: '187', text: "6'2 - 187cm" },
              { value: '190', text: "6'3 - 190cm" },
              { value: '193', text: "6'4 - 193cm" },
              { value: '195', text: "6'5 - 195cm" },
              { value: '198', text: "6'6 - 198cm" },
              { value: '200', text: "6'7 - 200cm" },
              { value: '203', text: "6'8 - 203cm" },
              { value: '205', text: "6'9 - 205cm" },
              { value: '208', text: "6'0 - 208cm" },
              { value: '210', text: "6'1 - 210cm" },
              { value: '213', text: "7'0 - 213cm" },
            ],
          formControlName: "height",
        },

        {
          inputType: "dropdown",
          placeholder: "Select Cast",
          option:
            [
              { value: 'butt', text: 'Butt' },
              { value: 'Jutt', text: 'Jutt' },
              { value: 'mirza', text: 'Mirza' },
              { value: 'mughal', text: 'Mughal' },
              { value: 'rajpoot', text: 'Rajpoot' },
            ],
          formControlName: "cast",
        },

        {
          inputType: "dropdown",
          placeholder: "Select Religion",
          option:
            [
              { value: 'islam', text: 'Islam' },
              { value: 'sikh', text: 'Sikh' },
              { value: 'hindu', text: 'Hindu' },
              { value: 'christian', text: 'Christian' },
            ],
          formControlName: "religion",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Comunity",
          option:
            [
              { value: 'ahle_sunnat', text: 'Ahl E Sunnat' },
              { value: 'ahle_hadees', text: 'Ahl E Hadees' },
              { value: 'shia', text: 'Shia' },
            ],
          formControlName: "comunity",
        },
        {
          inputType: "dropdown",
          placeholder: "Mother Tongue",
          option:
            [
              { value: 'english', text: 'English' },
              { value: 'urdu', text: 'Urdu' },
              { value: 'punjabi', text: 'Punjabi' },
              { value: 'sindhi', text: 'Sindhi' },
              { value: 'pashto', text: 'Pashto' },
              { value: 'saraiki', text: 'Saraiki' },
            ],
          formControlName: "motherTongue",
        },

      ]
    },

    {
      formTitle: "Education",

      formFields: [
        {
          inputType: "dropdown",
          placeholder: "Education Level",
          option:
            [
              { value: 'diploma', text: 'Diploma' },
              { value: 'matric', text: 'Matric' },
              { value: 'tntermediate', text: 'Intermediate' },
              { value: 'graduate', text: 'Graduate' },
              { value: 'masters', text: 'Masters' },
            ],
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
          inputType: "dropdown",
          placeholder: "Company Type",
          option:
            [
              { value: 'government', text: 'Government' },
              { value: 'semi_government', text: 'Semi Government' },
              { value: 'private', text: 'Private' },
              { value: 'self', text: 'Self' },
              { value: 'international_firm', text: 'International Firm' },
            ],
          formControlName: "company",
        },

        {
          inputType: "dropdown",
          placeholder: "Mothly Income",
          option:
            [
              { value: '20000',   text: 'Less than 25000 PKR' },
              { value: '30000',   text: '30,000 PKR' },
              { value: '40000',   text: '40,000 PKR' },
              { value: '50000',   text: '50,000 PKR' },
              { value: '60000',   text: '60,000 PKR' },
              { value: '70000',   text: '70,000 PKR' },
              { value: '100000',  text: '100,000 PKR' },
              { value: '200000',  text: '200,000 PKR' },
              { value: '300000',  text: '300,000 PKR' },
              { value: '400000',  text: '400,000 PKR' },
              { value: '500000',  text: '500,000 PKR' },
              { value: '600000',  text: '600,000 PKR' },
              { value: '700000',  text: '700,000 PKR' },
              { value: '800000',  text: '800,000 PKR' },
              { value: '900000',  text: '900,000 PKR' },
              { value: '1000000', text: '1000,000 PKR' },
              { value: '1100000', text: 'Above than 1000,000 PKR' },
            ],
            
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
          inputType: "dropdown",
          placeholder: "Country",
          option:
            [
              { value: 'pakistan', text: 'Pakistan' },
              { value: 'india', text: 'india' },
              { value: 'england', text: 'England' },
              { value: 'canada', text: 'Canada' },
            ],
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
      phone: new FormControl('',          ),
      email: new FormControl('',          ),
      password: new FormControl('',       ),
      name: new FormControl('',           ),
      ProfileCreatedBy: new FormControl(''),
      gender: new FormControl('',         ),
      community: new FormControl('',      ),
      age: new FormControl('',            ),
      height: new FormControl('',         ),
      cast: new FormControl('',           ),
      religion: new FormControl('',       ),
      martialStatus: new FormControl('',  ),
      motherTongue: new FormControl('',   ),
      educationLevel: new FormControl('', ),
      educationField: new FormControl('', ),
      profession: new FormControl('',     ),
      company: new FormControl('',        ),
      income: new FormControl('',         ),
      address: new FormControl('',        ),
      city: new FormControl('',           ),
      country: new FormControl('',        ),
    })
  }

  onLogin() {
    console.log(this.loginFormGroup.value)
  }

  onSignup() {
      console.log(this.loginFormGroup.value)
      
  }
}
