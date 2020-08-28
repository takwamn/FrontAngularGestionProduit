import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/service/produitservice';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lister-produit',
  templateUrl: './lister-produit.component.html',
  styleUrls: ['./lister-produit.component.css']
})
export class ListerProduitComponent implements OnInit {
 
 
  public produitall : Produit[];
  public produits : any;
  public mot_cle : String ="";
  public produit:Produit;
  public value:any;

  constructor(private activeRoute:ActivatedRoute,private produitService : ProduitService, private router:Router) { }

  ngOnInit(): void {
    
    this.getALLPRODUCT();
  }

   getALLPRODUCT()
  {
    this.produitService.getAll().subscribe(
      data=>{
      this.produits=data;
      this.produitall=data;
      console.log(data);
    },err=>{console.log(err);
    })
    }

    Onchercher(form:any)
    {
      this.mot_cle=form.mot_cle;
      this.produits=this.produitall;
      {
        if(this.mot_cle!="")
        {
          this.produits=this.produits.filter(x=>x.nomp==form.mot_cle);
        }
        else
        this.produits=this.produitall;
      }
    }

    onDeleteProduct(id:number)
    {
      let conf=confirm("Etes vous sur de supprimer cette produit ? ");
      if(conf)
      this.produitService.deleteProduct(id).subscribe(data=>{
        this.getALLPRODUCT;
        window.location.reload();//mn 3ana
      },err=>{console.log(err);})
    }

    onEditProduct(id:number)
    {
      this.router.navigateByUrl("/produit/modif/"+id);
    }
    
}
