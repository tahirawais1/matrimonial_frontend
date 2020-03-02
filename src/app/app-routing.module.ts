import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ListingsComponent } from './listings/listings.component';
import { ProfileDetailComponent } from './profileDetail/profileDetail.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  { path: 'signup', component:SignupComponent},
  { path: 'listings', component:ListingsComponent},
  { path: 'settings', canActivate :[AuthGuard] , component:SettingsComponent},
  { path: 'profileDetail', canActivate :[AuthGuard] , component:ProfileDetailComponent},
  { path: '', component: HomeComponent },
//   { path: '', component: AdminPanelComponent },
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
