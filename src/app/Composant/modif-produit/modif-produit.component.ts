import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/service/produitservice';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {
  public product:any;
  constructor(private ProduitService:ProduitService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
  }

  ongetProduct(){
  
    this.ProduitService.getone(this.activeRoute.snapshot.params.id)
      .subscribe(data=>
        this.product=data
      )}
    

OnupdateProduct(data:Produit){
  let prod:Produit;
  prod=new Produit(this.activeRoute.snapshot.params.id,data.nomp,data.prixunitairep,data.qte);
  this.ProduitService.updateProduct(prod).subscribe(data=>
    this.router.navigateByUrl("/produit/consulter"))
  }

}
