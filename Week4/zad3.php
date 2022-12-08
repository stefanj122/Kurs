<?php
$ja = array("firstName"=>"Stefan","lastName"=>"Jeftic");
function abbrivatedName($obj){
    return $obj["firstName"][0].". " . $obj["lastName"][0]. ".";
}
echo abbrivatedName($ja);
?>