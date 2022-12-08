<?php
function compareCurlyBraces($input){
    $counter1 = 0;
    $counter2 = 0;
    for($x = 0; $x < strlen($input); $x++){
        if($input[$x] === '{'){
            $counter1++;
        }elseif($input[$x] === '}'){
            $counter2++;
        }
    }
    if($counter1 === $counter2) {
        return 'Is same.';
    }else {
        return 'Is not same.';
    }
}
echo compareCurlyBraces("{{{{{{{}}}}}}}");

?>