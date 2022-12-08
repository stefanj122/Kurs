import random

allTypes = {'human': {
    'minSpeed': 100, 'maxSpeed': 120, 'minDamage': 40, 'maxDamage': 45
},  'ork': {
    'minSpeed': 90, 'maxSpeed': 100, 'minDamage': 45, 'maxDamage': 60
},  'elf': {
    'minSpeed': 110, 'maxSpeed': 130, 'minDamage': 35, 'maxDamage': 45
},  'undead': {
    'minSpeed': 90, 'maxSpeed': 120, 'minDamage': 40, 'maxDamage': 50
},
}


def spawnPlayer(name,type):
    obj = {
        "name": name,
        "type": type,
        "Speed": movSpeed(type,allTypes),
        "Damage": typeDamage(type, allTypes),
    }
    return obj


def movSpeed(type,allTypes):
    return random.randrange(allTypes[type]['minSpeed'],allTypes[type]['maxSpeed'])
def typeDamage(type,allTypes):
    return random.randrange(allTypes[type]['minDamage'],allTypes[type]['maxDamage'])

print(spawnPlayer('stefanj', 'undead'))
