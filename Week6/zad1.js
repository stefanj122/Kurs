class Product {
  constructor(name = "", price = 0, stockQuantity = 0) {
    this.name = name;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }

  getStockValue() {
    return this.price * this.stockQuantity;
  }
}

const drink = new Product("Pepsi", 1.5, 56);
console.log(drink.getStockValue());
