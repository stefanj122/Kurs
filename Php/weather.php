<?php
$link = 'https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=2022-12-17&end_date=2022-12-21';
function getWeather($url){
    $json = file_get_contents($url);
    $obj = json_decode($json);
    $temperature = $obj->hourly->temperature_2m;
    $time = $obj->hourly->time;
    $snowfall = $obj->hourly->snowfall;
    $str = "TIME;TEMPERATURE;SNOWFALL\n";

    for($i=0; $i < count($time); $i++) {
        $str .= $time[$i] .";". $temperature[$i]. ";". (($snowfall[$i]==0) ? "false" : $snowfall[$i]) .";\n";
    }
    return $str;
}
// print_r($str);
$str=getWeather($link);
$f=fopen("Weather.scv","w") or die("Unable to open file.");
fwrite($f,$str);
fclose($f);

function hasWeatherChanged(){
    $str2 = '';
    $f=fopen("Weather.scv","r") or die("Unable to open file.");
// echo fread($f,filesize("Weather.csv"));
    while(!feof($f)){
        $str2 .= fgets($f);
    }
    fclose($f);
    $format1 = date("Y-m-d");
    $format2 = date("Y-m-").date("d")+5;
    $link2 ='https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date='.$format1.'&end_date='.$format2;
    $str1 = getWeather($link2);
    if($str2 != $str1){
        $f=fopen("Weather.scv","w") or die("Unable to open file.");
        fwrite($f,$str1);
        fclose($f);
        echo("Weather changed.\n");
    }else{
        echo("Nothing changes.\n");
    }
}
while(true){
    hasWeatherChanged();
        sleep(5);
}

?>
