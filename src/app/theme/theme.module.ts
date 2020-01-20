import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent, FooterComponent,UpperFooterComponent} from '.';
import { PageService } from './services/page.service';
import { StarAnimationComponent } from './components/starAnimation/starAnimation.component';
import { TextFieldComponent } from './components/textField/textField.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputControlSelectorComponent } from './components/inputControlSelector/inputControlSelector.component';
import { FormTitleComponent } from './components/formTitle/formTitle.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        UpperFooterComponent,
        StarAnimationComponent,
        TextFieldComponent,
        DropdownComponent,
        InputControlSelectorComponent,
        FormTitleComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        UpperFooterComponent,
        StarAnimationComponent,
        TextFieldComponent,
        DropdownComponent,
        InputControlSelectorComponent,
        FormTitleComponent
    ],
    providers: [PageService],
    entryComponents: [],
})
export class ThemeModule {}