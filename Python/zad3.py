class Person:
    def __init__(self,firstName,lastName):
        self.firstName = firstName
        self.lastName = lastName

    def abbrivatedName(self):
        print(f"{self.firstName[0]}. {self.lastName[0]}.")


ja = Person("Stefan", "Jeftic")
ja.abbrivatedName()
