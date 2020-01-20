import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent, FooterComponent,UpperFooterComponent} from '.';
import { PageService } from './services/page.service';
import { StarAnimationComponent } from './components/starAnimation/starAnimation.component';
@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        UpperFooterComponent,
        StarAnimationComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        UpperFooterComponent,
        StarAnimationComponent
    ],
    providers: [PageService],
    entryComponents: [],
})
export class ThemeModule {}