<?php
$arr = [1,2,3,4,5,6,7];

function getSubarray($a,$i){
    $newArr = array();
    if($i > count($a)){
        $i = count($a);
    }
    for($x = 0; $x < $i; $x++){
        array_push($newArr,$a[$x]);
    }
    return $newArr;
}

print_r(getSubarray($arr,50));

?>