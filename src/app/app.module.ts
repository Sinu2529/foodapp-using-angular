import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './services/food/food/food.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodComponent,
    SearchComponent,
    CartpageComponent,
    FoodpageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
