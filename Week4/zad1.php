<?php
function isSameObject($obj1,$obj2){
    $arr1values = array();
    $arr1keys = array();
    $arr2values = array();
    $arr2keys = array();

    foreach($obj1 as $x => $value){
        array_push($arr1keys,$x);
        array_push($arr1values,$value);
    }
    foreach($obj2 as $x => $value){
        array_push($arr2keys,$x);
        array_push($arr2values,$value);
    }
    for($x = 0; $x < count($arr1keys); $x++){
        if($arr1keys[$x] !== $arr2keys[$x]){
            return 'Objects are not the same.';
        }
    }
    for($x = 0; $x < count($arr1values); $x++){
        if($arr1values[$x] !== $arr2values[$x]){
            return 'Objects are not the same.';
        }
    }
    return 'Objects are the same.';
}
$obj1 = array('name'=>'Stefan',"phone"=>"066015800",'email'=>'stefan.jeftic122@gmail.com');
$obj2 = array('name'=>'Stefan',"phone"=>"066015800",'email'=>'stefan.jeftic122@gmail.com');

echo isSameObject($obj1,$obj2);
?>