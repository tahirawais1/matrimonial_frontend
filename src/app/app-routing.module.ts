import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ListingsComponent } from './listings/listings.component';
import { ProfileDetailComponent } from './profileDetail/profileDetail.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'signup', component:SignupComponent},
  { path: 'listings', component:ListingsComponent},
  { path: 'settings', component:SettingsComponent},
  { path: 'profileDetail', component:ProfileDetailComponent},
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
