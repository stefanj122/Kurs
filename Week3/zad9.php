<?php
function formatPrice($price,$numberOfDecimals,$currencySign,$hasSpace = true,$isCurrencyOnRight = true) {
    $newStr = '';
    $newStr = $newStr . number_format((float)$price, $numberOfDecimals, '.', '');
    
    if($hasSpace and $isCurrencyOnRight){
        $newStr = $newStr . " " . $currencySign;
    }elseif(!$hasSpace and $isCurrencyOnRight){
        $newStr = $newStr . $currencySign;        
    }elseif($hasSpace and !$isCurrencyOnRight){
        $newStr = $currencySign . " " . $newStr;        
    }elseif(!$hasSpace and !$isCurrencyOnRight){
        $newStr = $currencySign . $newStr;        
    }

    return $newStr;
}

echo formatPrice(100.1, 2, "$",true,false);
?>