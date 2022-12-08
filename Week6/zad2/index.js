import {Car} from "./Car.js";
import { Vehicle } from "./Vehicle.js";

const car1 = new Car('Golf 2', 100, 120, 55, 35)

const car = new Vehicle('Golf',4,150,120);
car.accelerate();
console.log(car.status())
console.log(car.currentSpeed)
car1.getMissingQuantityFromTank();
console.log(car1.currentFuelQuantity);