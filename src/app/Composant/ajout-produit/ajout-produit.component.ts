import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/service/produitservice';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  
 public allProducts:Produit[];
 public s:any;
  public currentP:Produit;
  mode:number=1;
  constructor(private produitService: ProduitService,private router:Router) { }

  ngOnInit(): void {
  }


  OnsaveProduct(data:Produit){
    this.produitService.addProduct(data).subscribe(res=>{
      this.currentP=res
      this.mode=2;
      this.gotolist();
      }
      ,err=>{console.log(err);
     })
  
   } 
  
   gotolist(){
    this.router.navigateByUrl("/produit/consulter");
  }

  OnewProduct(){
    this.mode=1;
  }

}
