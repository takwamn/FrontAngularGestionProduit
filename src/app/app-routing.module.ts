import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerProduitComponent } from './Composant/lister-produit/lister-produit.component';
import { AjoutProduitComponent } from './Composant/ajout-produit/ajout-produit.component';
import { ModifProduitComponent } from './Composant/modif-produit/modif-produit.component';


const routes: Routes = [
  { path: "produit/consulter", component: ListerProduitComponent },
  { path: "produit/ajout", component: AjoutProduitComponent },
  { path: "produit/modif/:id", component: ModifProduitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
