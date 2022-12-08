<?php
$arr = [1,2,3,4,5,6,7];

function evenArr($a){
    $newArr = array();
    for($x = 0; $x < count($a); $x++){
        if($a[$x] % 2 == 0){
            array_push($newArr,$a[$x]);
        }
    }
    return $newArr;
}

print_r(evenArr($arr));

?>