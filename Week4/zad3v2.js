class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get abbrivatedName(){
        return this.abbrivatedN();
    }
    abbrivatedN(){
        return `${this.firstName[0]}. ${this.lastName[0]}.`
    }
}
ja = new Person('Stefan','Jeftic');
console.log(ja.abbrivatedN());