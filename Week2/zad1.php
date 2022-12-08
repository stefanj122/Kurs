<?php
$arr = [1,2,34,-4,9];

function customMax($a){
    $max = $a[0];
    foreach ($a as $num){
        if($num > $max){
            $max = $num;
        }
    }
    return $max;
}
function customMin($a){
    $min = $a[0];
    foreach ($a as $num){
        if($num < $min){
            $min = $num;
        }
    }
    return $min;
}

echo customMax($arr) . "\n";
echo customMin($arr);
unset($arr[2]);
print_r($arr);

?>