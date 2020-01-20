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

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SignupComponent,
      ListingsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ThemeModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
