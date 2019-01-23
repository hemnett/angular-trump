import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShinyButtonComponent } from './shiny-button/shiny-button.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory.data.serice';

import { InMemoryTestComponent } from './in-memory-test/in-memory-test.component';


@NgModule({
   declarations: [
      AppComponent,
      ShinyButtonComponent,
      MediaItemComponent,
      MediaItemListComponent,
      FavoriteDirective,
      CategoryListPipe,
      MediaItemFormComponent,
      InMemoryTestComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService, { delay:  100 }
       )
   ],
   providers: [
      MediaItemService,
      { provide: lookupListToken, useValue: lookupLists }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
