class Product{
    constructor(title,price){
        this.title = title;
        this.price = price;
    }

}

let product1 = new Product ("shampoo", 10);
console.log(product1.title);
console.log(product1.price);

let product2 = new Product ("conditioner", 5);
console.log(product2.title);
console.log(product2.price);
