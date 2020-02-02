import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PageService } from './services/page.service';
import { StarAnimationComponent } from './components/starAnimation/starAnimation.component';
import { TextFieldComponent } from './components/textField/textField.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material Module
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';



//Theme Components
import { HeaderComponent, FooterComponent,UpperFooterComponent, RadioBtnComponent, DatePickerComponent, TabsComponent, ButtonComponent} from '.';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputControlSelectorComponent } from './components/inputControlSelector/inputControlSelector.component';
import { FormTitleComponent } from './components/formTitle/formTitle.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        //Material Module
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule 

    ],
    declarations: [
        HeaderComponent,
        DatePickerComponent,
        FooterComponent,
        UpperFooterComponent,
        RadioBtnComponent,
        StarAnimationComponent,
        TextFieldComponent,
        DropdownComponent,
        InputControlSelectorComponent,
        FormTitleComponent,
        TabsComponent,
        ButtonComponent
    ],
    exports: [
        FooterComponent,
        DatePickerComponent,
        HeaderComponent,
        UpperFooterComponent,
        StarAnimationComponent,
        TextFieldComponent,
        RadioBtnComponent,
        DropdownComponent,
        InputControlSelectorComponent,
        FormTitleComponent,
        TabsComponent
    ],
    providers: [PageService , MatDatepickerModule,],
    entryComponents: [],
})
export class ThemeModule {}