export class Vehicle {
    
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