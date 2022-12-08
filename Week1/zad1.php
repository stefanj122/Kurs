<?php
$basic = "Basci";
$premium = "Premium";
$platinum = "Platinum";
$employee = "Employee";
$requestWithSybscription = "Basic";
$payment_free = "FREE";
$PAYMEND_CREDIT_CARD = "CREDIT_CARD";
$totalPrice = 300;

if ($requestWithSybscription == $employee) {
    echo "Current subscription type has " . $payment_free . " payment method.\n";
} else {
    echo "Current subscription type has " . $PAYMEND_CREDIT_CARD . " payment method.\n";
}
switch ($requestWithSybscription){
    case "Basic":
        echo "Discounted price is: " . $totalPrice * 0.8;
        break;
    case "Premium":
        echo "Discounted price is: " . $totalPrice * 0.6;
        break;
    case "Platinum":
        echo "Discounted price is: " . $totalPrice * 0.4;
        break;
    case "Employee":
        echo "Discounted price is: " . $totalPrice * 0;
        break;
}

?>