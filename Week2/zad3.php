<?php
$arr = [10,20,60,80];

function customSum($a){
    $sum = 0;
    for($x = 0; $x < count($a); $x++){
        $sum += $a[$x];
    }
    return $sum;
}

echo customSum($arr)

?>