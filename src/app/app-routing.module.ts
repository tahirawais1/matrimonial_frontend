import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThemeDirective } from './theme.directive';


const routes: Routes = [
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
      ThemeDirective
   ]
})
export class AppRoutingModule { }
