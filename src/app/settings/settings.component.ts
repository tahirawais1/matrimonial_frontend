import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  changeAccountPrefGroup;
  updateProfilePrefGroup;
  updateProfileGroup
  detail;
  sub;
  page;
  image;
  updateprofileF = [
    {
      formFields: [
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
          placeholder: "Select Comunity",
          option:
            [
              { value: 'Ahle Sunnat', text: 'Ahl E Sunnat' },
              { value: 'Ahle Hadees', text: 'Ahl E Hadees' },
              { value: 'shia', text: 'Shia' },
            ],
          formControlName: "community",
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

  updateprofileS = [
    {
      formFields: [
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
        {
          inputType: "textField",
          placeholder: "Education Field",
          formControlName: "educationField",
        },
        {
          inputType: "dropdown",
          placeholder: "Education Level",
          option:
            [
              { value: 'Diploma', text: 'Diploma' },
              { value: 'Matric', text: 'Matric' },
              { value: 'Intermediate', text: 'Intermediate' },
              { value: 'Graduate', text: 'Graduate' },
              { value: 'Masters', text: 'Masters' },
            ],
          formControlName: "educationLevel",
        },
        {
          inputType: "textField",
          placeholder: "Profession",
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
  updateprofilePrefF = [
    {
      formFields: [
        {
          inputType: "dropdown",
          placeholder: "Preference Age",
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
          formControlName: "pref_Age",
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
          formControlName: "pref_Cast",
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
          formControlName: "pref_height",
        },

        {
          inputType: "dropdown",
          placeholder: "Select Comunity",
          option:
            [
              { value: 'Ahle Sunnat', text: 'Ahl E Sunnat' },
              { value: 'Ahle Hadees', text: 'Ahl E Hadees' },
              { value: 'shia', text: 'Shia' },
            ],
          formControlName: "pref_community",
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
          formControlName: "pref_religion",
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
          formControlName: "pref_martialStatus",
        },


      ]
    }
  ];

  updateprofilePrefS = [
    {
      formFields: [
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
          formControlName: "pref_motherTongue",
        },
        {
          inputType: "textField",
          placeholder: "Education Field",
          formControlName: "pref_educationField",
        },
        {
          inputType: "dropdown",
          placeholder: "Education Level",
          option:
            [
              { value: 'Diploma', text: 'Diploma' },
              { value: 'Matric', text: 'Matric' },
              { value: 'Intermediate', text: 'Intermediate' },
              { value: 'Graduate', text: 'Graduate' },
              { value: 'Masters', text: 'Masters' },
            ],
          formControlName: "pref_educationLevel",
        },
        {
          inputType: "textField",
          placeholder: "Profession",
          formControlName: "pref_profession",
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
          formControlName: "pref_income",
        },

        {
          inputType: "textField",
          placeholder: "City",
          formControlName: "pref_city",
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
          formControlName: "pref_country",
        },

      ]
    }
  ];

  changePassword = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Change Password",
          formControlName: "password",
        },
      ]
    }
  ];
  changeEmail = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Change Email",
          formControlName: "email",
        },
      ]
    }
  ];
  changeAddress = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Change Address",
          formControlName: "address",
        },
      ]
    }
  ];
  changePhone = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Change Phone",
          formControlName: "phone",
        },
      ]
    }
  ];


  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //bind the login profile ID
    this.dataService.getOneList(1).subscribe(data => {
      this.detail = data;
      console.log(this.detail);
    }, (error) => {
      console.log(error);
    });
    setTimeout(() => {
      this.updateProfileGroup = this.formBuilder.group({
        id: new FormControl(1),
        age: new FormControl(this.detail.age),
        cast: new FormControl(this.detail.cast),
        height: new FormControl(this.detail.height),
        community: new FormControl(this.detail.community),
        martial_status: new FormControl(this.detail.martial_status),
        religion: new FormControl(this.detail.religion),
        mother_tongue: new FormControl(this.detail.mother_tongue),
        educationField: new FormControl(this.detail.educationField),
        educationLevel: new FormControl(this.detail.educationLevel),
        profession: new FormControl(this.detail.profession),
        income: new FormControl(this.detail.income),
        city: new FormControl(this.detail.city),
        country: new FormControl(this.detail.country),
        email: new FormControl(this.detail.email),
        password: new FormControl(this.detail.password),
        phone: new FormControl(this.detail.phone),
        address: new FormControl(this.detail.address),
        pref_Cast: new FormControl(this.detail.pref_Cast),
        pref_Age: new FormControl(this.detail.pref_Age),
        pref_community: new FormControl(this.detail.pref_community),
        pref_martialStatus: new FormControl(this.detail.pref_martialStatus),
        pref_educationLevel: new FormControl(this.detail.pref_educationLevel),
        pref_educationField: new FormControl(this.detail.pref_educationField),
        pref_city: new FormControl(this.detail.pref_city),
        pref_country: new FormControl(this.detail.pref_country),
        pref_height: new FormControl(this.detail.pref_height),
        pref_religion: new FormControl(this.detail.pref_religion),
        pref_motherTongue: new FormControl(this.detail.pref_motherTongue),
        pref_profession: new FormControl(this.detail.pref_profession),
        pref_income: new FormControl(this.detail.pref_income),
        image: new FormControl('https://icons-for-free.com/iconfiles/png/512/customer+information+personal+profile+user+icon-1320086045331670685.png'),
      })

      // this.updateProfilePrefGroup = this.formBuilder.group({
      //   pref_Cast: new FormControl(this.detail.pref_Cast),
      //   pref_Age: new FormControl(this.detail.pref_Age),
      //   pref_community: new FormControl(this.detail.pref_community),
      //   pref_martialStatus: new FormControl(this.detail.pref_martialStatus),
      //   pref_educationLevel: new FormControl(this.detail.pref_educationLevel),
      //   pref_educationField: new FormControl(this.detail.pref_educationField),
      //   pref_city: new FormControl(this.detail.pref_city),
      //   pref_country: new FormControl(this.detail.pref_country),
      //   pref_height: new FormControl(this.detail.pref_height),
      //   pref_religion: new FormControl(this.detail.pref_religion),
      //   pref_motherTongue: new FormControl(this.detail.pref_motherTongue),
      //   pref_profession: new FormControl(this.detail.pref_profession),
      //   pref_income: new FormControl(this.detail.pref_income),
      // })
    }, 600);

  }

  onvalueUpdate() {
    //bind the login profile ID
    this.dataService.updateProfile(this.updateProfileGroup.value).subscribe(res => {
      console.dir(res);
    }
    )
    window.location.reload();

  }

  onDelete() {
    //bind the login profile ID
    this.dataService.deleteMethod(1).subscribe(res => {
      window.location.reload();
      ///route to Home and expire settings links
    }
    )
  }
  onFileChanged(event) {
    this.image = event.target.files[0]
  }

}
