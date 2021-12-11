import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ListingsComponent } from './listings/listings.component';
import { ProfileDetailComponent } from './profileDetail/profileDetail.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: 'joinus', component:SignupComponent},
  { path: 'aboutUs', component:AboutUsComponent},
  { path: 'contactUs', component:ContactUsComponent},
  { path: 'members', component:ListingsComponent},
  { path: 'services', component:GalleryComponent},
  { path: 'volunteer', component:SettingsComponent},
  { path: 'profileDetail' , component:ProfileDetailComponent},
  { path: 'admin' , component:AdminComponent},
  { path: 'admin-dashboard' , component:AdminDashboardComponent},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
