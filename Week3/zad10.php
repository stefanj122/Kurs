<?php
function validate($str,$reg){
    for($x = 0; $x < strlen($str); $x++){
        if(str_contains($reg,$str[$x]) === false){
            return false;
        }
    }
    return true;
}
function emailValidator($email){
$abc = 'abcdefghijklmnopqrstuvwxyz';
$numb = '1234567890';
$arr1 = explode('@',$email);
$arr2 = explode('.',$arr1[1]);
$name = $arr1[0];
$adress = $arr2[0];
$domain = $arr2[1];
if(strlen($name) == 0 || strlen($adress) == 0 || strlen($adress) > 63 || strlen($domain) < 2 || strlen($domain) > 63 || count($arr1) > 2){
    return "This email is not valid!";
}

if(!validate($name,$abc . $numb ."_.")){
    return 'This email is not valid';
}
if(!validate($adress,$abc . $numb ."-")){
    return 'This email is not valid';
}
if(!validate($domain,$abc)){
    return 'This email is not valid';
}
return "This email is valid!";
}

echo emailValidator('stefan.jeftic122@gmail.com')

?>