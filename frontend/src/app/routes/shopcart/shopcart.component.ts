import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/routes/services/product.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
  productShopcart: any;

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProductsToShop();
  }

  getProductsToShop() {
    let products = JSON.parse(localStorage.getItem('productShopcart') || '[]');
    this.productShopcart = products;
  }

  deleteFromCart(id: string = '') {
    let products = JSON.parse(localStorage.getItem('productShopcart') || '[]');
    console.log(products)

    products = products.filter((product: any) => product.id !== id);
    console.log(products)
    let string = JSON.stringify(products);
    console.log(string)

    
    localStorage.setItem('productShopcart', string);
    this.getProductsToShop();
    console.log('borrar', id);
  }

  productsCount(simbol: string = '+', id: string = '') {
    console.log(simbol, id);

    let products = JSON.parse(localStorage.getItem('productShopcart') || '[]');

    let newArr = []

    for (let p of products) {

      if (p.id === id) {
        if (simbol === '+') {
          p.productCount += 1;
        } else {
          if (p.productCount || p.productCount !== 0) {
            p['productCount'] -= 1;
          }
        }
      }

      newArr.push(p)
    }

    console.log(newArr)

    let string = JSON.stringify(newArr)
    this.productShopcart = newArr
    localStorage.setItem("productShopcart", string)
    this.getProductsToShop()
  }


}
