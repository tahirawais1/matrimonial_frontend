import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from './theme/theme.module';
import { SignupComponent } from './signup/signup.component';
import { ListingsComponent } from './listings/listings.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileDetailComponent } from './profileDetail/profileDetail.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SnowremovalComponent } from './snowremoval/snowremoval.component';
import { ComplaintComponent } from './complaint/complaint.component';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ThemeModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatSnackBarModule,
      MatDialogModule
   ],
   declarations: [							
      AppComponent,
      HomeComponent,
      SignupComponent,
      ListingsComponent,
      ProfileDetailComponent,
      SettingsComponent,
      AboutUsComponent,
      ContactUsComponent,
      GalleryComponent,
      ScheduleComponent,
      SnowremovalComponent,
      ComplaintComponent
   ],
   providers: [
      AuthGuard
   ],
   entryComponents: [
      SnowremovalComponent,
      ComplaintComponent
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
