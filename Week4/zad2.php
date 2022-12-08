<?php
$ja = array('Name'=>'Stefan','phone'=>'066015800');

function customValues($obj){
    $arr = array();
    foreach($obj as $x => $value){
        array_push($arr,$value);
    }
    return $arr;
}
var_dump(customValues($ja));

?>