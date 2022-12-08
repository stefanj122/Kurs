async function spawnPlayer(name, type){
    const allTypes = {
        human: {
            minSpeed: 100,
            maxSpeed: 120,
            minDamage: 40,
            maxDamage: 45,
        },
        ork: {
            minSpeed: 90,
            maxSpeed: 100,
            minDamage: 45,
            maxDamage: 60,
        },
        elf: {
            minSpeed: 110,
            maxSpeed: 130,
            minDamage: 35,
            maxDamage: 45,
        },
        undead: {
            minSpeed: 90,
            maxSpeed: 120,
            minDamage: 40,
            maxDamage: 50,
        },
    };
    if(!allTypes[`${type}`]){
        return -1;
    }
    const obj = {
        name,
        type,
        movementSpeed: movSpeed(type,allTypes),
        damage: typeDamage(type,allTypes)
    };
    return obj;

}
async function movSpeed(type,obj){
    return Math.floor(Math.random() * (obj[`${type}`].maxSpeed - obj[`${type}`].minSpeed + 1) + obj[`${type}`].minSpeed);
}
function typeDamage(type,obj){
    return Math.floor(Math.random() * (obj[`${type}`].maxDamage - obj[`${type}`].minDamage + 1) + obj[`${type}`].minDamage);
}
const a = spawnPlayer('Stefanj','undead');
const b = a.then((data) => {
  return data.damage;
})
setTimeout(() => {
  console.log(a);
}, 10);
