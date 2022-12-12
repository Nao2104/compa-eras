import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //url para consumir todos los productos 
  URL_API = 'http://localhost:5000/product'

  //atributo

  products: any 
  currentProduct: Product // se crea para poder registrar los nuevo usuarios, que se inicialice en un nuvo producto

  constructor(public http:HttpClient) {
    this.currentProduct = new Product()
   }

  getProducts(){
    return this.http.get(`${this.URL_API}/get-products`)
  }

  //metodo de crear producto 
  createProduct(data: Product){
    return this.http.post(`${this.URL_API}/create-products`, data)
  }
   // borrar el producto
   deleteProduct(id: string){
    return this.http.delete(`${this.URL_API}/delete-products?id=${id}`)
  }
  //actualizar el producto
  updateProduct(id: string, data: any){
  return this.http.put(`${this.URL_API}/update-products?id=${id}`, data)
}
}
