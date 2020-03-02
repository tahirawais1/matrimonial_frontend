import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  editname = false;
  editpassword = false;
  editphone = false;
  editemail = false;
  editaddress = false;
  edit = false;
  changeAccountPrefGroup;
  updateProfilePrefGroup;
  updateProfileGroup
  detail:any; 
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
          placeholder: "Select Cast",
          option:
            [
              { value: 'Butt', text: 'Butt' },
              { value: 'Jutt', text: 'Jutt' },
              { value: 'Mirza', text: 'Mirza' },
              { value: 'Mughal', text: 'Mughal' },
              { value: 'Rajpoot', text: 'Rajpoot' },
              { value: 'Sheikh', text: 'Sheikh' },
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
              { value: 'Less than 25000 PKR', text: 'Less than 25000 PKR' },
              { value: '30,000 PKR', text: '30,000 PKR' },
              { value: '40,000 PKR', text: '40,000 PKR' },
              { value: '50,000 PKR', text: '50,000 PKR' },
              { value: '60,000 PKR', text: '60,000 PKR' },
              { value: '70,000 PKR', text: '70,000 PKR' },
              { value: '100,000 PKR', text: '100,000 PKR' },
              { value: '200,000 PKR', text: '200,000 PKR' },
              { value: '300,000 PKR', text: '300,000 PKR' },
              { value: '400,000 PKR', text: '400,000 PKR' },
              { value: '500,000 PKR', text: '500,000 PKR' },
              { value: '600,000 PKR', text: '600,000 PKR' },
              { value: '700,000 PKR', text: '700,000 PKR' },
              { value: '800,000 PKR', text: '800,000 PKR' },
              { value: '900,000 PKR', text: '900,000 PKR' },
              { value: '1000,000 PKR', text: '1000,000 PKR' },
              { value: 'Above than 1000,000 PKR', text: 'Above than 1000,000 PKR' },
            ],
          formControlName: "income",
        },

        {
          inputType: "dropdown",
          placeholder: "City",
          option:
            [
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


  updateprofilePrefF = [
    {
      formFields: [
        {
          inputType: "dropdown",
          placeholder: "Preference Age",
          option:
            [
              { value: "doesn't matter", text: "doesn't matter" },
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
              { value: "doesn't matter", text: "doesn't matter" },
              { value: 'Butt', text: 'Butt' },
              { value: 'Jutt', text: 'Jutt' },
              { value: 'Mirza', text: 'Mirza' },
              { value: 'Sheikh', text: 'Sheikh' },
              { value: 'Mughal', text: 'Mughal' },
              { value: 'Rajpoot', text: 'Rajpoot' },
            ],
          formControlName: "pref_Cast",
        },
        {
          inputType: "dropdown",
          placeholder: "Height",
          option:
            [
              { value: "doesn't matter", text: "doesn't matter" },
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
              { value: "doesn't matter", text: "doesn't matter" },
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
              { value: "doesn't matter", text: "doesn't matter" },
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
              { value: "doesn't matter", text: "doesn't matter" },
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
              { value: "doesn't matter", text: "doesn't matter" },
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
          option: [
            { value: 'CS & IT', text: 'CS & IT' },
            { value: 'Banking & Finance', text: 'Banking & Finance' },
            { value: 'Managment', text: 'Managment' },
            { value: 'Medical', text: 'Medical' },
            { value: 'Engineering', text: 'Engineering' },
            { value: 'Arts and Social Sciences', text: 'Arts and Social Sciences' },
          ],
          formControlName: "pref_educationField",
        },
        {
          inputType: "dropdown",
          placeholder: "Education Level",
          option:
            [
              { value: "doesn't matter", text: "doesn't matter" },
              { value: 'Diploma', text: 'Diploma' },
              { value: 'Matric', text: 'Matric' },
              { value: 'Intermediate', text: 'Intermediate' },
              { value: 'Graduate', text: 'Graduate' },
              { value: 'Masters', text: 'Masters' },
            ],
          formControlName: "pref_educationLevel",
        },
        {
          inputType: "dropdown",
          placeholder: "Profession",
          option: [
            { value: "doesn't matter", text: "doesn't matter" },
            { value: 'accountant', text: 'accountant' },
            { value: 'actor', text: 'actor' },
            { value: 'actress', text: 'actress' },
            { value: 'air traffic controller', text: 'air traffic controller' },
            { value: 'architect', text: 'architect' },
            { value: 'artist', text: 'artist' },
            { value: 'attorney', text: 'attorney' },
            { value: 'banker', text: 'banker' },
            { value: 'bartender', text: 'bartender' },
            { value: 'barber', text: 'barber' },
            { value: 'bookkeeper', text: 'bookkeeper' },
            { value: 'builder', text: 'builder' },
            { value: 'businessman', text: 'businessman' },
            { value: 'businesswoman', text: 'businesswoman' },
            { value: 'businessperson', text: 'businessperson' },
            { value: 'butcher', text: 'butcher' },
            { value: 'carpenter', text: 'carpenter' },
            { value: 'cashier', text: 'cashier' },
            { value: 'chef', text: 'chef' },
            { value: 'coach', text: 'coach' },
            { value: 'dental hygienist', text: 'dental hygienist' },
            { value: 'dentist', text: 'dentist' },
            { value: 'designer', text: 'designer' },
            { value: 'developer', text: 'developer' },
            { value: 'dietician', text: 'dietician' },
            { value: 'doctor', text: 'doctor' },
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
          formControlName: "pref_profession",
        },
        {
          inputType: "dropdown",
          placeholder: "Mothly Income",
          option:
            [
              { value: "doesn't matter", text: "doesn't matter" },
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
          inputType: "dropdown",
          placeholder: "City",
          option:
            [
              { value: "doesn't matter", text: "doesn't matter" },
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
          formControlName: "pref_city",
        },
        {
          inputType: "dropdown",
          placeholder: "Country",
          option:
            [
              { value: "doesn't matter", text: "doesn't matter" },
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
  changename = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Edit your Name",
          formControlName: "name",
        },
      ]
    }
  ];
  descript = [
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Tell viewrs about yourself",
          formControlName: "description",
        },
      ]
    },
    {
      formFields: [
        {
          inputType: "textField",
          placeholder: "Enter Your Family Details",
          formControlName: "familyDetail",
        },
      ]
    }
  ];


  constructor(private pageService: PageService, private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'];
      });
    console.log(this.page)

    this.dataService.getOneList(localStorage.getItem('loginid')).subscribe(data => {
      this.detail = data;
      console.log(this.detail);
    }, (error) => {
      console.log(error);
    });


    setTimeout(() => {
      this.updateProfileGroup = this.formBuilder.group({
        id: new FormControl(this.page),
        age: new FormControl(this.detail.age),
        name: new FormControl(this.detail.name),
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
        description: new FormControl(this.detail.description),
        familyDetail: new FormControl(this.detail.familyDetail),
        image: new FormControl('https://lh4.googleusercontent.com/proxy/H2lE-HK4WQvb9p8-dY86HeNisFCR8CDxqRWEObzQzqMfiY-CNTva9MuuV4aN2UbZFooRKot4TviRqyo0gBrXyyFHUgCQ7YjLVGYJjHN8LsZJEUTaGbDGT-iYbKzx_g'),
      })
    }, 1000);

  }

  onvalueUpdate() {
    console.dir(this.updateProfileGroup.value);

    this.dataService.updateProfile(this.updateProfileGroup.value).subscribe(res => {
      console.dir(res);
    })
    

    setTimeout(() =>{

      window.location.reload();
    }, 1000);

  }
  onLogout() {
    localStorage.removeItem('loginid');
    this.pageService.changeRoute('/');
  }
  myid = localStorage.getItem('loginid');

  onDelete(){
    this.dataService.deleteMethod(this.myid).subscribe(res => {
    });
    window.location.reload();
    localStorage.removeItem('loginid');

  }

  selectedFile: Array<File>;

  redirectTo(url) {
    this.pageService.changeRoute(url);
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files;
    this.submit();
  }
  imageId;

  submit() {
    let formData = new FormData();
    for (var i = 0; i < this.selectedFile.length; i++) {
      formData.append("uploads[]", this.selectedFile[i], this.selectedFile[i].name);
    }
    this.dataService.imageUpload(formData).subscribe(res => {
      this.imageId = res;
    })
  }
}

