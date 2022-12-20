const BASIC = 20;
const PREMIUM = 40;
const PLATINUM = 60;
const EMPLOYEE = 100;

 const totalPrice = 300;

let totalPriceWithDiscount = 0;

const requestWithSubscription ="BASIC";

if(requestWithSubscription === "BASIC") {
	totalPriceWithDiscount = totalPrice - totalPrice * BASIC / 100;
} else if (requestWithSubscription === "PREMIUM") {
	totalPriceWithDiscount = totalPrice - totalPrice * PREMIUM / 100;
} else if (requestWithSubscription === "PLATINUM") {
	totalPriceWithDiscount = totalPrice - totalPrice * PLATINUM / 100;
} else {
	totalPriceWithDiscount  = 0;
}

console.log(`Discounted price is: ${totalPriceWithDiscount}`);