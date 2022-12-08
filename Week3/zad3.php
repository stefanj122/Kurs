<?php
$arr = array();
$json1 = '{
        "firstName": "Homer",
        "lastName": "Simpson",
        "gender": "male",
        "role": "parent",
        "age": 43,
        "hobbies": ["sleeping", "eating", "watching tv"]}';
$json2 = '{
        "firstName": "Bart",
        "lastName": "Simpson",
        "gender": "male",
        "role": "child",
        "age": 12,
        "hobbies": ["skating", "football", "watching tv"]}';
$json3 = '{
        "firstName": "Lisa",
        "lastName": "Simpson",
        "gender": "female",
        "role": "child",
        "age": 9,
        "hobbies": ["reading", "playing music", "studying", "swimming"]}';
$json4 = '{
        "firstName": "Marge",
        "lastName": "Simpson",
        "gender": "female",
        "role": "parent",
        "age": 37,
        "hobbies": ["cooking", "watching tv"]}';
    // }';
$obj1 = json_decode($json1);
$obj2 = json_decode($json2);
$obj3 = json_decode($json3);
$obj4 = json_decode($json4);

array_push($arr,$obj1,$obj2,$obj3,$obj4);
function uniHobbies($arr){
    $newArr = array();
    for($x = 0; $x < count($arr); $x++){
        foreach($arr[$x] as $i=>$element){
            if($i === 'hobbies'){
                foreach($arr[$x]->$i as $j){
                    if(!in_array($j,$newArr)){
                        array_push($newArr,$j);
                    }
                }
            }
        }
    }
    return $newArr;
}

var_dump(uniHobbies($arr));
?>