/**
 *  Classes - (added in ES6) allow more structured data organisation
 *            when working with objects
 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // defining a method:
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

const product1 = new Product("Shirt", 20.25);
product1.displayProduct();