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
        {
          inputType: "dropdown",
          placeholder: "Profile Created By",
          option:
            [
              { value: 'Self', text: 'Self   ' },
              { value: 'Parents', text: 'Parents   ' },
              { value: 'Siblings', text: 'Siblings   ' },
              { value: 'Relative', text: 'Relative   ' },
            ],
          formControlName: "profileCreatedBy",
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
        {
          inputType: "dropdown",
          placeholder: "Height",
          option:
            [
              { value: '134 cm', text: "4'5 - 134cm" },
              { value: '137 cm', text: "4'6 - 137cm" },
              { value: '139 cm', text: "4'7 - 139cm" },
              { value: '142 cm', text: "4'8 - 142cm" },
              { value: '144 cm', text: "4'9 - 144cm" },
              { value: '147 cm', text: "4'0 - 147cm" },
              { value: '149 cm', text: "4'1 - 149cm" },
              { value: '152 cm', text: "5'0 - 152cm" },
              { value: '154 cm', text: "5'1 - 154cm" },
              { value: '157 cm', text: "5'2 - 157cm" },
              { value: '160 cm', text: "5'3 - 160cm" },
              { value: '162 cm', text: "5'4 - 162cm" },
              { value: '165 cm', text: "5'5 - 165cm" },
              { value: '167 cm', text: "5'6 - 167cm" },
              { value: '170 cm', text: "5'7 - 170cm" },
              { value: '172 cm', text: "5'8 - 172cm" },
              { value: '175 cm', text: "5'9 - 175cm" },
              { value: '177 cm', text: "5'0 - 177cm" },
              { value: '180 cm', text: "5'1 - 180cm" },
              { value: '182 cm', text: "6'0 - 182cm" },
              { value: '185 cm', text: "6'1 - 185cm" },
              { value: '187 cm', text: "6'2 - 187cm" },
              { value: '190 cm', text: "6'3 - 190cm" },
              { value: '193 cm', text: "6'4 - 193cm" },
              { value: '195 cm', text: "6'5 - 195cm" },
              { value: '198 cm', text: "6'6 - 198cm" },
              { value: '200 cm', text: "6'7 - 200cm" },
              { value: '203 cm', text: "6'8 - 203cm" },
              { value: '205 cm', text: "6'9 - 205cm" },
              { value: '208 cm', text: "6'0 - 208cm" },
              { value: '210 cm', text: "6'1 - 210cm" },
              { value: '213 cm', text: "7'0 - 213cm" },
            ],
          formControlName: "height",
        },

        {
          inputType: "dropdown",
          placeholder: "Select Cast",
          option:
            [
              { value: 'Butt', text: 'Butt' },
              { value: 'Jutt', text: 'Jutt' },
              { value: 'Mirza', text: 'Mirza' },
              { value: 'Sheikh', text: 'Sheikh' },
              { value: 'Mughal', text: 'Mughal' },
              { value: 'Rajpoot', text: 'Rajpoot' },
            ],
          formControlName: "cast",
        },

        {
          inputType: "dropdown",
          placeholder: "Select Religion",
          option:
            [
              { value: 'Islam', text: 'Islam' },
              { value: 'Sikh', text: 'Sikh' },
              { value: 'Hindu', text: 'Hindu' },
              { value: 'Christian', text: 'Christian' },
            ],
          formControlName: "religion",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Comunity",
          option:
            [
              { value: 'Ahle Sunnat', text: 'Ahl E Sunnat' },
              { value: 'Ahle Hadees', text: 'Ahl E Hadees' },
              { value: 'Shia', text: 'Shia' },
            ],
          formControlName: "community",
        },
        {
          inputType: "dropdown",
          placeholder: "Mother Tongue",
          option:
            [
              { value: 'English', text: 'English' },
              { value: 'Urdu', text: 'Urdu' },
              { value: 'Punjabi', text: 'Punjabi' },
              { value: 'Sindhi', text: 'Sindhi' },
              { value: 'Pashto', text: 'Pashto' },
              { value: 'Saraiki', text: 'Saraiki' },
            ],
          formControlName: "mother_tongue",
        },

      ]
    },

    {
      // formTitle: "Education",

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
          inputType: "dropdown",
          placeholder: "Education Field",
          option:
            [
              { value: 'CS & IT', text: 'CS & IT' },
              { value: 'Banking & Finance', text: 'Banking & Finance' },
              { value: 'Managment', text: 'Managment' },
              { value: 'Medical', text: 'Medical' },
              { value: 'Engineering', text: 'Engineering' },
              { value: 'Arts and Social Sciences', text: 'Arts and Social Sciences' },
            ],
          formControlName: "educationField",
        },
      ]
    },
    {
      // formTitle: "Profession",

      formFields: [
        {
          inputType: "dropdown",
          placeholder: "Profession",
          option:
            [
              { value: 'Accountant', text: 'Accountant' },
              { value: 'Actor', text: 'Actor' },
              { value: 'Actress', text: 'Actress' },
              { value: 'Air traffic controller', text: 'Air traffic controller' },
              { value: 'Architect', text: 'Architect' },
              { value: 'Artist', text: 'Artist' },
              { value: 'Attorney', text: 'Attorney' },
              { value: 'Banker', text: 'Banker' },
              { value: 'Bartender', text: 'Bartender' },
              { value: 'Barber', text: 'Barber' },
              { value: 'IT professional', text: 'IT professional' },
              { value: 'Bookkeeper', text: 'Bookkeeper' },
              { value: 'Builder', text: 'Builder' },
              { value: 'Businessman', text: 'Businessman' },
              { value: 'Businesswoman', text: 'Businesswoman' },
              { value: 'Businessperson', text: 'Businessperson' },
              { value: 'Butcher', text: 'Butcher' },
              { value: 'Carpenter', text: 'Carpenter' },
              { value: 'Cashier', text: 'Cashier' },
              { value: 'Chef', text: 'Chef' },
              { value: 'Coach', text: 'Coach' },
              { value: 'Dental hygienist', text: 'dental hygienist' },
              { value: 'Dentist', text: 'dentist' },
              { value: 'Designer', text: 'designer' },
              { value: 'Developer', text: 'developer' },
              { value: 'Dietician', text: 'dietician' },
              { value: 'Doctor', text: 'doctor' },
              { value: 'economist', text: 'economist' },
              { value: 'editor', text: 'editor' },
              { value: 'electrician', text: 'electrician' },
              { value: 'engineer', text: 'engineer' },
              { value: 'farmer', text: 'farmer' },
              { value: 'filmmaker', text: 'filmmaker' },
              { value: 'fisherman', text: 'fisherman' },
              { value: 'flight attendant', text: 'flight attendant' },
              { value: 'jeweler', text: 'jeweler' },
              { value: 'judge', text: 'judge' },
              { value: 'lawyer', text: 'lawyer' },
              { value: 'mechanic', text: 'mechanic' },
              { value: 'musician', text: 'musician' },
              { value: 'nutritionist', text: 'nutritionist' },
              { value: 'nurse', text: 'nurse' },
              { value: 'optician', text: 'optician' },
              { value: 'painter', text: 'painter' },
              { value: 'pharmacist', text: 'pharmacist' },
              { value: 'photographer', text: 'photographer' },
              { value: 'physician', text: 'physician' },
              { value: 'pilot', text: 'pilot' },
              { value: 'plumber', text: 'plumber' },
              { value: 'police officer', text: 'police officer' },
              { value: 'politician', text: 'politician' },
              { value: 'professor', text: 'professor' },
              { value: 'programmer', text: 'programmer' },
              { value: 'psychologist', text: 'psychologist' },
              { value: 'receptionist', text: 'receptionist' },
              { value: 'salesman', text: 'salesman' },
              { value: 'salesperson', text: 'salesperson' },
              { value: 'saleswoman', text: 'saleswoman' },
              { value: 'secretary', text: 'secretary' },
              { value: 'singer', text: 'singer' },
              { value: 'surgeon', text: 'surgeon' },
              { value: 'teacher', text: 'teacher' },
              { value: 'therapist', text: 'therapist' },
              { value: 'translator', text: 'translator' },
              { value: 'translator', text: 'translator' },
              { value: 'undertaker', text: 'undertaker' },
              { value: 'veterinarian', text: 'veterinarian' },
              { value: 'videographer', text: 'videographer' },
              { value: 'waiter', text: 'waiter' },
              { value: 'waitress', text: 'waitress' },
              { value: 'writer', text: 'writer' },
            ],
          formControlName: "profession",
        },


        {
          inputType: "dropdown",
          placeholder: "Mothly Income",
          option:
            [
              { value: '20000', text: 'Less than 25000 PKR' },
              { value: '30000', text: '30,000 PKR' },
              { value: '40000', text: '40,000 PKR' },
              { value: '50000', text: '50,000 PKR' },
              { value: '60000', text: '60,000 PKR' },
              { value: '70000', text: '70,000 PKR' },
              { value: '100000', text: '100,000 PKR' },
              { value: '200000', text: '200,000 PKR' },
              { value: '300000', text: '300,000 PKR' },
              { value: '400000', text: '400,000 PKR' },
              { value: '500000', text: '500,000 PKR' },
              { value: '600000', text: '600,000 PKR' },
              { value: '700000', text: '700,000 PKR' },
              { value: '800000', text: '800,000 PKR' },
              { value: '900000', text: '900,000 PKR' },
              { value: '1000000', text: '1000,000 PKR' },
              { value: '1100000', text: 'Above than 1000,000 PKR' },
            ],

          formControlName: "income",
        },
      ]
    },
    {
      // formTitle: "Address",

      formFields: [
        {
          inputType: "textField",
          placeholder: "Mailing Address",
          formControlName: "address",
        },
        {
          inputType: "dropdown",
          placeholder: "City",
          option: [
            { value: 'Islamabad', text: 'Islamabad' },
            { value: 'Attock', text: 'Attock' },
            { value: 'Bahawalpur', text: 'Bahawalpur' },
            { value: 'Burewala', text: 'Burewala' },
            { value: 'Chakwal', text: 'Chakwal' },
            { value: 'Chiniot', text: 'Chiniot' },
            { value: 'Faisalabad', text: 'Faisalabad' },
            { value: 'Gujar Khan', text: 'Gujar Khan' },
            { value: 'Gujranwala', text: 'Gujranwala' },
            { value: 'Gujrat', text: 'Gujrat' },
            { value: 'Jhang', text: 'Jhang' },
            { value: 'Jhelum', text: 'Jhelum' },
            { value: 'Kallar Syedan', text: 'Kallar Syedan' },
            { value: 'Kasur', text: 'Kasur' },
            { value: 'Kharian', text: 'Kharian' },
            { value: 'Lahore', text: 'Lahore' },
            { value: 'Mianwali', text: 'Mianwali' },
            { value: 'Multan', text: 'Multan' },
            { value: 'Murree', text: 'Murree' },
            { value: 'Rahim Yar Khan', text: 'Rahim Yar Khan' },
            { value: 'Rawalpindi', text: 'Rawalpindi' },
            { value: 'Sadiqabad', text: 'Sadiqabad' },
            { value: 'Sahiwal', text: 'Sahiwal' },
            { value: 'Sargodha', text: 'Sargodha' },
            { value: 'Sheikhupura', text: 'Sheikhupura' },
            { value: 'Sialkot', text: 'Sialkot' },
            { value: 'Taxila', text: 'Taxila' },
            { value: 'Toba Tek Singh', text: 'Toba Tek Singh' },
            { value: 'Badin', text: 'Badin' },
            { value: 'Hyderabad', text: 'Hyderabad' },
            { value: 'Jacobabad', text: 'Jacobabad' },
            { value: 'Karachi', text: 'Karachi' },
            { value: 'Khairpur', text: 'Khairpur' },
            { value: 'Larkana', text: 'Larkana' },
            { value: 'Mirpur Khas', text: 'Mirpur Khas' },
            { value: 'Nawabshah', text: 'Nawabshah' },
            { value: 'Sukkur', text: 'Sukkur' },
            { value: 'Thatta', text: 'Thatta' },
            { value: 'Abbottabad', text: 'Abbottabad' },
            { value: 'Bannu', text: 'Bannu' },
            { value: 'Battagram', text: 'Battagram' },
            { value: 'Charsadda', text: 'Charsadda' },
            { value: 'D.I.Khan', text: 'D.I.Khan' },
            { value: 'Haripur', text: 'Haripur' },
            { value: 'Kohat', text: 'Kohat' },
            { value: 'Mansehra', text: 'Mansehra' },
            { value: 'Mardan', text: 'Mardan' },
            { value: 'Nowshera', text: 'Nowshera' },
            { value: 'Peshawar', text: 'Peshawar' },
            { value: 'Swat', text: 'Swat' },
            { value: 'Swabi', text: 'Swabi' },
            { value: 'Timer', text: 'Timer' },
            { value: 'garaTank', text: 'garaTank' },
            { value: 'Chaman', text: 'Chaman' },
            { value: 'Gwadar', text: 'Gwadar' },
            { value: 'Khuzdar', text: 'Khuzdar' },
            { value: 'Quetta', text: 'Quetta' },
            { value: 'Ziarat', text: 'Ziarat' },
            { value: 'Bagh', text: 'Bagh' },
            { value: 'Bhimber', text: 'Bhimber' },
            { value: 'Kotli', text: 'Kotli' },
            { value: 'Muzaffarabad', text: 'Muzaffarabad' },
            { value: 'Rawalakot', text: 'Rawalakot' },
            { value: 'Gilgit', text: 'Gilgit' },
            { value: 'Skardu', text: 'Skardu' },
          ],
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

