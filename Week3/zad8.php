<?php
$ja = array("name"=>"Stean","email"=>"stefan.jeftic122@gmail.com","phone"=>"066015800");
function replaceTemplates($str,$obj){
    $newStr = $str;
    $newStr = str_replace("{{name}}",$obj["name"],$newStr);
    $newStr = str_replace("{{email}}",$obj["email"],$newStr);
    $newStr = str_replace("{{phone}}",$obj["phone"],$newStr);

    return $newStr;
}
echo replaceTemplates("Name: {{name}}. Email: {{email}}. Phone: {{phone}}",$ja);
?>