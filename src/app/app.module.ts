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

@NgModule({
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
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ThemeModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatSnackBarModule
   ],
   providers: [
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
