import { Vehicle } from "./Vehicle.js"

export class Car extends Vehicle{
    constructor(brand, currentSpeed, speedLimit , tankCapacity = 55){
        super(brand, 4, currentSpeed, speedLimit);
        this.tankCapacity = tankCapacity;
        this.currentFuelQuantity = this.currentSpeed = Math.floor(Math.random() * (this.tankCapacity + 1));
    }
    getMissingQuantityFromTank() {
        console.log(`You need ${this.tankCapacity - this.currentFuelQuantity} liters`)
    }
}