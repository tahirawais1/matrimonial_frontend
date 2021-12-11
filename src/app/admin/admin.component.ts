import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PageService } from '../theme/services/page.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  intresetform;
 
  formData = [
    {
      // formTitle: "Login",
      formFields: [
        {
          inputType: "textField",
          placeholder: "Admin ID",
          formControlName: "admin_id",
        },
        {
          inputType: "textField",
          placeholder: "Password",
          formControlName: "password",
        },
        
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder, private pageService: PageService,) { }

  ngOnInit() {
    this.intresetform = this.formBuilder.group({
      admin_id: new FormControl(''),
      password: new FormControl(''),
    })
  }
  onLogin(){
    this.pageService.changeRoute('admin-dashboard');
  }

}
