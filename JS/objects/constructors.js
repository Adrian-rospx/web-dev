/**
 * Constructors = method for defining the properties 
 *                and methods of an object 
 */

function Car(brand, model, year, color) {
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = () => console.log(`The ${this.brand} is starting`)
}

// multiple car object creations:
const car1 = new Car("Toyota", "Corolla", 1988, "white");
const car2 = new Car("Mitsubishi", "Lancer Evolution", 1990, "blue");

console.log(car1.model);
console.log(car2.model);

// calling methods:
car1.drive();
car2.drive();