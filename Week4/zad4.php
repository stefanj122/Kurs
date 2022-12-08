<?php
class Player {
    public $name;
    public $type;
    public $movementSpeed;
    public $damage;

    function __construct($name,$type){
        $this->name = $name;
        $this->type = $type;
    }
    function set_movSpeed($speed){
        $this->movementSpeed = $speed;
    }
    function set_damage($damage){
        $this->damage = $damage;
    }
    function printplayer(){
        echo "Name: ".$this->name . ",Type: ". $this->type . ", Speed: " .$this->movementSpeed . ", Damage: ".$this->damage . ".\n";
    }
}
function spawnPlayer($name,$type){
    $allTypes = array("human"=>[100,120,90,100], "ork"=>[90,100,45,60],"elf"=>[110,130,35,45],"undead"=>[90,120,40,50]);
    $player = new Player($name,$type);

    $player->set_movSpeed(moveSpeed($type,$allTypes));
    $player->set_damage(setDamage($type,$allTypes));
    $player->printplayer();

}
function moveSpeed($type,$all){
    return rand($all[$type][0],$all[$type][1]);
}
function setDamage($type,$all){
    return rand($all[$type][2],$all[$type][3]);
}
spawnPlayer("stefanj","ork")


?>