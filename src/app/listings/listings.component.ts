import { Component, OnInit } from '@angular/core';
import { DataService } from '../theme/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  filterGroup;
  list;

  filters = [
    {

      formFields: [
        {
          inputType: "dropdown",
          multipleSelect:true,
          placeholder: "Select Profile",
          option:
            [
            
              { value: 'male', text: 'Male' },
              { value: 'female', text: 'Female' },
            ],
          formControlName: "gender",
        },
        {
          inputType: "dropdown",
          multipleSelect:true,
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
          multipleSelect:true,
          placeholder: "Select Martial Status",
          option:
            [
            
              { value: 'unMarried', text: 'Un Married' },
              { value: 'divorced', text: 'Divorced' },
              { value: 'widowed', text: 'Widowed' },
              { value: 'secondMariage', text: 'Second Marriage' },

            ],
          formControlName: "martialStatus",
        },
        {
          inputType: "dropdown",
          multipleSelect:true,
          placeholder: "Select Education Level",
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
          multipleSelect:true,
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
          inputType: "textField",
          placeholder: "City",
          formControlName: "city",
        },
        {
          inputType: "dropdown",
          multipleSelect:true,
          placeholder: "Select Country",
          option:
            [
            
              { value: 'pakistan', text: 'Pakistan' },
              { value: 'india', text: 'india' },
              { value: 'england', text: 'England' },
              { value: 'canada', text: 'Canada' },
            ],
          formControlName: "country",
        },
        {
          inputType: "dropdown",
          multipleSelect:true,
          placeholder: "Height", //Range
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
          multipleSelect:true,
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
          multipleSelect:true,
          placeholder: "Select Mother Tongue",
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
        {
          inputType: "dropdown",
          multipleSelect:true,
          placeholder: "Select Profession",
          option:
            [
            
              { value: 'iT', text: 'IT' },
              { value: 'doctor', text: 'Doctor' },
              { value: 'banker', text: 'Banker' },
            ],
          formControlName: "profession",
        },
        {
          inputType: "dropdown",
          multipleSelect:true,
          placeholder: "Select Income",
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
  ]


  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.list = this.dataService.listinings;

    this.filterGroup = this.formBuilder.group({
      gender: new FormControl(''),
      age: new FormControl(''),
      cast: new FormControl(''),
      martialStatus: new FormControl(''),
      educationLevel: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      height: new FormControl(''),
      religion: new FormControl(''),
      motherTongue: new FormControl(''),
      profession: new FormControl(''),
      income: new FormControl(''),
    })
  }

  onSearch(){

    console.log(this.filterGroup.value)
  }


  routeToServices(item) {
    this.router.navigate(['/profileDetail'], { queryParams: { page: item.id } });
    window.scrollTo(0, 0);
  }


}
