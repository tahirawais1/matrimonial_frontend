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
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SignupComponent,
      ListingsComponent,
      ProfileDetailComponent,
      SettingsComponent,
      AdminPanelComponent
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
