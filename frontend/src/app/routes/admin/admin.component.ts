import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/routes/services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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



  orderByPrice(){
    let products = this.productService.products || []
    let sortedProducts;
    if(products || products.lenght > 0){

      //para organizar de menor a mayor
      sortedProducts= products.sort((a: any, b: any) => (a.price > b.price) ? 1 : -1)
      this.productService.products = sortedProducts
      return
}
    return
  }

  createProduct(form: NgForm){
    console.log(form.value)

    if (form.value._id){
      this.updateProduct(form.value)
      return
    }

    delete form.value._id // null elimina el id

    //deconstruir el objeto
    let { name, stock } = form.value

    if(!name || !stock)
    return alert("Por favor diligencie todos los campos")
    
    this.productService.createProduct(form.value).subscribe((res: any) => {
      this.getProducts() // para actualizar la tabla
      alert(res.msg);
      this.productService.currentProduct = new Product()
    })
  }

  deleteProduct(id: string, name: string)
  {

    let isDeleted = confirm (`Esta seguro que desea eliminar el producto "${name}"`);

    if (isDeleted){

    this.productService.deleteProduct(id).subscribe((res: any) =>{
      this.getProducts();
      alert(res.msg || 'error');
    });
    return;
    }
    return;
    }

    updateProduct(data:Product){
      this.productService.updateProduct(data._id, data).subscribe((res) => {
        alert("hola")
        this.getProducts()
        this.productService.currentProduct
      })
    }

    fillForm(product: Product){
    this.productService.currentProduct = product
}
}