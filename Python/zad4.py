import random

allTypes = {
    "human": {"minSpeed": 100, "maxSpeed": 120, "minDamage": 40, "maxDamage": 45},
    "ork": {"minSpeed": 90, "maxSpeed": 100, "minDamage": 45, "maxDamage": 60},
    "elf": {"minSpeed": 110, "maxSpeed": 130, "minDamage": 35, "maxDamage": 45},
    "undead": {"minSpeed": 90, "maxSpeed": 120, "minDamage": 40, "maxDamage": 50},
}


def spawnPlayer(name, type):
    obj = player(name, type)
    return obj


class player:
    def __init__(self, name, type):
        self.name = name
        self.type = type
        self.movementSpeed = movSpeed(type, allTypes)
        self.damage = typeDamage(type, allTypes)

    def __str__(self):
        return f"Name: {self.name}, Type: {self.type}, Movement speed: {self.movementSpeed}, Damage: {self.damage}."


def movSpeed(type,allTypes):
    return random.randrange(allTypes[type]["minSpeed"], allTypes[type]["maxSpeed"])


def typeDamage(type,allTypes):
    return random.randrange(allTypes[type]["minDamage"], allTypes[type]["maxDamage"])


print(spawnPlayer("stefanj", "undead"))
