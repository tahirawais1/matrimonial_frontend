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
          placeholder: "Select Profile",
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'male', text: 'Male' },
              { value: 'female', text: 'Female' },
            ],
          formControlName: "gender",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Cast",
          option:
            [
              { value: 'all', text: 'All' },
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
          placeholder: "Select Martial Status",
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'unMarried', text: 'Un Married' },
              { value: 'divorced', text: 'Divorced' },
              { value: 'widowed', text: 'Widowed' },
              { value: 'secondMariage', text: 'Second Marriage' },

            ],
          formControlName: "martialStatus",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Education Level",
          option:
            [
              { value: 'all', text: 'All' },
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
          placeholder: "City",
          formControlName: "city",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Country",
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'pakistan', text: 'Pakistan' },
              { value: 'india', text: 'india' },
              { value: 'england', text: 'England' },
              { value: 'canada', text: 'Canada' },
            ],
          formControlName: "country",
        },
        {
          inputType: "dropdown",
          placeholder: "Height", //Range
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'english', text: 'English' },
              { value: 'urdu', text: 'Urdu' },
              { value: 'punjabi', text: 'Punjabi' },
              { value: 'sindhi', text: 'Sindhi' },
              { value: 'pashto', text: 'Pashto' },
              { value: 'saraiki', text: 'Saraiki' },
            ],
          formControlName: "height",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Religion",
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'islam', text: 'Islam' },
              { value: 'islam', text: 'Islam' },
              { value: 'hindu', text: 'Hindu' },
              { value: 'christian', text: 'Christian' },
            ],
          formControlName: "religion",
        },
        {
          inputType: "dropdown",
          placeholder: "Select Mother Tongue",
          option:
            [
              { value: 'all', text: 'All' },
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
          placeholder: "Select Profession",
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'iT', text: 'IT' },
              { value: 'doctor', text: 'Doctor' },
              { value: 'banker', text: 'Banker' },
            ],
          formControlName: "profession",
        },
        {
          inputType: "dropdown",
          placeholder: "Income", //Range
          option:
            [
              { value: 'all', text: 'All' },
              { value: 'english', text: 'English' },
              { value: 'urdu', text: 'Urdu' },
              { value: 'punjabi', text: 'Punjabi' },
              { value: 'sindhi', text: 'Sindhi' },
              { value: 'pashto', text: 'Pashto' },
              { value: 'saraiki', text: 'Saraiki' },
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


  routeToServices(item) {
    this.router.navigate(['/profileDetail'], { queryParams: { page: item.id } });
    window.scrollTo(0, 0);
  }


}
