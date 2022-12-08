<?php

function invertString($str){
    $newStr = '';
    for($x = strlen($str) - 1; $x >= 0; $x--){
        $newStr = $newStr . $str[$x];
    }
    return $newStr . "\n";
}
function palindrom($str){
    $invStr = invertString($str);
    $invStr = strtolower(str_replace(" ","",$invStr));
    $orStr = strtolower(str_replace(" ","",$str));

    if (strcmp($invStr,$orStr) === 1){
        echo "Palidrom je. \n";
    }else {
        echo "Nije palidrom. \n";
    }

}

echo invertString('Today is a rainy day');
echo palindrom('Ana voli Miovana');

?>