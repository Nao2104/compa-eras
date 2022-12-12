import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/routes/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
  
    let response = this.productService.getProducts()
 
   // traduce el observable, hay que suscribirse
    response.subscribe((res: any) => {
    this.productService.products = res.data 
    console.log(this.productService.products)
    })
   }

}
