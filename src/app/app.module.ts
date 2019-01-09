import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShinyButtonComponent } from './shiny-button/shiny-button.component';
import { MediaItemComponent } from './media-item/media-item.component';

@NgModule({
   declarations: [
      AppComponent,
      ShinyButtonComponent,
      MediaItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
