import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product
  id: any;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getId();
    this.getProductById(this.id);
    
  }

  getId(){
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  getProductById(id){
    this.productService.readById(id).subscribe( product => {
      this.product = product
    });
  }

  deleteProduct(){
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!')
      this.router.navigate(['products']);
    })
  }

  cancel(){
    this.router.navigate(['products']);
  }


}
