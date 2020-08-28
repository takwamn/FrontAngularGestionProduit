import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//zedneha


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerProduitComponent } from './Composant/lister-produit/lister-produit.component';
import { AjoutProduitComponent } from './Composant/ajout-produit/ajout-produit.component';
import { ModifProduitComponent } from './Composant/modif-produit/modif-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerProduitComponent,
    AjoutProduitComponent,
    ModifProduitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
