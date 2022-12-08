<?php
$arr = [1,2,3,4,5,6,7];

function rotateArr($a){
    $newArr = array();
    for($x = count($a) - 1; $x >= 0; $x--){
        array_push($newArr,$a[$x]);
    }
    return $newArr;
}

print_r(rotateArr($arr));

?>