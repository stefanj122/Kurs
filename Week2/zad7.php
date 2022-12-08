<?php
$arr = [1,2,3,4,5,6,7];

function searchArr($a,$b){
    for($x = 0; $x < count($a); $x++){
        if($a[$x] == $b){
            return $x;
        }
    }
    return -1;
}

print_r(searchArr($arr,2));

?>