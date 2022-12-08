<?php
function calculator($arr, $operation) {
    $result = 0;
    switch($operation){
        
        case "+":
            foreach($arr as $element){
                $result += $element;
            }
            break;
        case "-":
            foreach($arr as $element){
                $result -= $element;
            }
            break;
        case "*":
            $result = 1;
            foreach($arr as $element){
                $result *= $element;
            }
            break;
        case "/":
            $result = 1;
            foreach($arr as $element){
                $result /= $element;
            }
            break;
    }
    return $result;
}

echo calculator([1,3,3],'*');

?>