export class Product {
  //atributos y sus tipos
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  //keywords:

  //constructor instanciar o inicializar los atributos cuando tengan un valor
  constructor(
    _id = "",
    name = "",
    price = 0,
    image = "",
    description = "",
    stock = 0
  ) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
    this.stock = stock;
  }
}
