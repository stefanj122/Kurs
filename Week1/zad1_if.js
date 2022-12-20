const BASIC = "BASIC";
const PREMIUM = "PREMIUM";
const PLATINUM = "PLATINUM";
const EMPLOYEE = "EMPLOYEE";

const PAYMENT_FREE = "FREE";
const PAYMENT_CREDIT_CARD = "CREDIT_CARD";

const requestWithSubscription = BASIC;

if(requestWithSubscription === EMPLOYEE) {
	console.log(`Current subscription type has ${PAYMENT_FREE} payment method`);
} else {
	console.log(`Current subscription type has ${PAYMENT_CREDIT_CARD} payment method`);
}