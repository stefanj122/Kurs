class Vehicle {
    
    constructor(brand = '', numberOfWheels = 1, currentSpeed = 0, speedLimit = 0){
        this.brand = brand;
        this.numberOfWheels = numberOfWheels;
        this.currentSpeed = currentSpeed;
        this.speedLimit = speedLimit;
    }

    // set currentSpeed(){
    //     this.currentSpeed = currentSpeed;
    // }

    accelerate(){
        this.currentSpeed = Math.floor(Math.random() * this.speedLimit + 1);
    }

    status(){
        return (this.currentSpeed / 2 > this.speedLimit) ? "You are going too fast, be careful!" : "Thanks for driving safely!";
    }
}

const car = new Vehicle('Golf',4,150,120);
car.accelerate();
console.log(car.status())

class Car extends Vehicle{
    constructor(brand, currentSpeed, speedLimit , tankCapacity = 55, currentFuelQuantity = 0){
        super(brand, 4, currentSpeed, speedLimit);
        this.tankCapacity = tankCapacity;
        this.currentFuelQuantity = this.currentSpeed = Math.floor(Math.random() * this.tankCapacity + 1);
    }
    getMissingQuantityFromTank() {
        console.log(`You need ${this.tankCapacity - this.currentFuelQuantity} liters`)
    }
}
const car1 = new Car('Golf 2', 100, 120, 55, 35)

car1.getMissingQuantityFromTank()