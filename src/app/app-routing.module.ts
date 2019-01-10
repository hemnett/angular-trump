import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FavoriteDirective } from './favorite.directive';

const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   // ],
   // declarations: [
   //    FavoriteDirective
   ]
})
export class AppRoutingModule { }
