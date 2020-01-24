import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listinings = {

    listItems: [
      {
        id: 0,
        name: 'Hamza Muhammad tahir Awais',
        gender:'male',
        phone:"03007431729", 
        age:'25',
        featured:true,
        email:'tahirawais1123@gmail.com', 
        address: 'Adress of bride or groom',
        cast: 'sheikh',
        image:'assets/images/img_1.jpg',
        description:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family from Tamil Nadu, with professional qualification working in UAE and from religious, rich/affluent family. Bride's photo will only be shared if we like the groom.",
        familyDetail:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family",
        ProfileCreatedBy:'parents',

        data:[
          { detail: ['21 yrs Old', 'Never Married', 'Urdu', '5`6', 'Muslim', 'Jutt'] },
          { detail: ['lahore','Pakistan','1232222222pkr/mnth' ,'IT Profession', 'Bachelors' , 'CS'] }
        ],
        filters:[
          {filterName:'cast' , filterValue:'sheikh' },
          {filterName:'martialStatus' , filterValue:'never married' },
          {filterName:'educationLevel' , filterValue:'graduate' },
          {filterName:'city' , filterValue:'Lahore' },
          {filterName:'country' , filterValue:'Pakistan' },
          {filterName:'height' , filterValue: '5`60 to 6`1' },
          {filterName:'religion' , filterValue:'islam' },
          {filterName:'motherTongue' , filterValue:'urdu' },
          {filterName:'profession' , filterValue:'It' },
          {filterName:'income' , filterValue:'1232222222 to 1290382130' },
        ],
      },
      {
        id: 1,
        name: 'Abdulrehman',
        phone:"03007431729", 
        gender:'male',
        age:'25',
        email:'tahirawais1123@gmail.com', 
        address: 'Adress of bride or groom',
        cast: 'sheikh',
        image:'assets/images/img_1.jpg',
        description:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family from Tamil Nadu, with professional qualification working in UAE and from religious, rich/affluent family. Bride's photo will only be shared if we like the groom.",
        familyDetail:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family",
        ProfileCreatedBy:'self',

        data:[
          { detail: ['21 yrs Old', 'Never Married', 'Urdu', '5`6', 'Muslim', 'Jutt'] },
          { detail: ['lahore','Pakistan','1232222222pkr/mnth' ,'IT Profession', 'Bachelors' , 'CS'] }
        ],
        filters:[
          {filterName:'cast' , filterValue:'sheikh' },
          {filterName:'martialStatus' , filterValue:'never married' },
          {filterName:'educationLevel' , filterValue:'graduate' },
          {filterName:'city' , filterValue:'Lahore' },
          {filterName:'country' , filterValue:'Pakistan' },
          {filterName:'height' , filterValue: '5`60 to 6`1' },
          {filterName:'religion' , filterValue:'islam' },
          {filterName:'motherTongue' , filterValue:'urdu' },
          {filterName:'profession' , filterValue:'It' },
          {filterName:'income' , filterValue:'1232222222 to 1290382130' },
        ],
      },
      {
        id: 2,
        name: 'Waseem',
        phone:"03007431729", 
        age:'25',
        gender:'male',
        email:'tahirawais1123@gmail.com', 
        address: 'Adress of bride or groom',
        cast: 'sheikh',
        image:'assets/images/img_1.jpg',
        description:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family from Tamil Nadu, with professional qualification working in UAE and from religious, rich/affluent family. Bride's photo will only be shared if we like the groom.",
        familyDetail:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family",
        ProfileCreatedBy:'self',

        data:[
          { detail: ['21 yrs Old', 'Never Married', 'Urdu', '5`6', 'Muslim', 'Jutt'] },
          { detail: ['lahore','Pakistan','1232222222pkr/mnth' ,'IT Profession', 'Bachelors' , 'CS'] }
        ],
        filters:[
          {filterName:'cast' , filterValue:'sheikh' },
          {filterName:'martialStatus' , filterValue:'never married' },
          {filterName:'educationLevel' , filterValue:'graduate' },
          {filterName:'city' , filterValue:'Lahore' },
          {filterName:'country' , filterValue:'Pakistan' },
          {filterName:'height' , filterValue: '5`60 to 6`1' },
          {filterName:'religion' , filterValue:'islam' },
          {filterName:'motherTongue' , filterValue:'urdu' },
          {filterName:'profession' , filterValue:'It' },
          {filterName:'income' , filterValue:'1232222222 to 1290382130' },
        ],
      },
      {
        id: 3,
        name: 'Rida',
        email:'tahirawais1123@gmail.com', 
        phone:"03007431729", 
        age:'25',
        gender:'female',
        featured:true,
        address: 'Adress of bride or groom',
        cast: 'sheikh',
        image:'assets/images/img_1.jpg',
        description:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family from Tamil Nadu, with professional qualification working in UAE and from religious, rich/affluent family. Bride's photo will only be shared if we like the groom.",
        familyDetail:"Seek suitable alliance for my good looking daughter. Born and brought up in UAE. Studying final year Architect in UAE. We're religious, follow sunnah, hijab and rich/affluent family. Groom age should be below 28, religious, well mannered, Urdu speaking family",
        ProfileCreatedBy:'self',
        data:[
          { detail: ['21 yrs Old', 'Never Married', 'Urdu', '5`6', 'Muslim', 'Jutt'] },
          { detail: ['lahore','Pakistan','1232222222pkr/mnth' ,'IT Profession', 'Bachelors' , 'CS'] }
        ],
        filters:[
          {filterName:'cast' , filterValue:'sheikh' },
          {filterName:'martialStatus' , filterValue:'never married' },
          {filterName:'educationLevel' , filterValue:'graduate' },
          {filterName:'city' , filterValue:'Lahore' },
          {filterName:'country' , filterValue:'Pakistan' },
          {filterName:'height' , filterValue: '5`60 to 6`1' },
          {filterName:'religion' , filterValue:'islam' },
          {filterName:'motherTongue' , filterValue:'urdu' },
          {filterName:'profession' , filterValue:'It' },
          {filterName:'income' , filterValue:'1232222222pkr/mnt to 1290382130pkr/mnt' },
        ],
      },
    ]

  }
  getProfileByTitle(id) {
    return this.listinings.listItems[id];
  }


}



