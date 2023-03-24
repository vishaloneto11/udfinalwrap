import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyheaderComponent } from './myComponents/myheader/myheader.component';
import { RecipesComponent } from './myComponents/recipes/recipes.component';
import { RecipeslistComponent } from './myComponents/recipes/recipeslist/recipeslist.component';
import { RecipesdetailComponent } from './myComponents/recipes/recipesdetail/recipesdetail.component';
import { RecipeitemsComponent } from './myComponents/recipes/recipeslist/recipeitems/recipeitems.component';
import { ShoppinglistComponent } from './myComponents/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './myComponents/shoppinglist/shoppingedit/shoppingedit.component';
import { BannerComponent } from './myComponents/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyheaderComponent,
    RecipesComponent,
    RecipeslistComponent,
    RecipesdetailComponent,
    RecipeitemsComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
