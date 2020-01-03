import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent, FooterComponent, NicheComponent, TechStackComponent,UpperFooterComponent, LoaderComponent } from '.';
import { PageService } from './services/page.service';
import { StarAnimationComponent } from './components/starAnimation/starAnimation.component';
@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
        NicheComponent,
        TechStackComponent,
        UpperFooterComponent,
        StarAnimationComponent
    ],
    exports: [
        NicheComponent,
        LoaderComponent,
        FooterComponent,
        HeaderComponent,
        TechStackComponent,
        UpperFooterComponent,
        StarAnimationComponent
    ],
    providers: [PageService],
    entryComponents: [],
})
export class ThemeModule {}