import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/routes/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() image: string | undefined
  @Input() btnText: string | undefined
  @Input() price: any | undefined
  @Input() btnColor: string | undefined
  @Input() cardSice: string | undefined
  @Input() stock: any | undefined
  @Input() itemId: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  buy(id: string = "", title: string = "", image: string = "", description: string = "", price: string = ""): void {
  
    let isFilledShopcart = localStorage.getItem("productShopcart") 

    if(isFilledShopcart){

      let value = localStorage.getItem("productShopcart") || ""

      let obj = JSON.parse(value)

      obj.push({id, title, image, description, ProductCount: 1, price})

      let string = JSON.stringify(obj)

      localStorage.setItem("productShopcart", string)
      return

    }

      let toSave = [{id, title,image, description, productCount: 1, price}]

      let string = JSON.stringify(toSave) || ""

      localStorage.setItem("productShopcart", string)


     
    alert("Añadir al carrito")
  }
  notAvailable(): void {
    alert("No hay stock disponible")
  }

}


