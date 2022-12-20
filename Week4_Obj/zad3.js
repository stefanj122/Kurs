const me = {
    firstName: 'Stefan',
    lastName: 'Jeftic',
    abbrivatedName: function() {
        return `${this.firstName[0]}. ${this.lastName[0]}.`
    }
}
const date1 = new Date();
console.log(me.abbrivatedName());
date1.setDate(1)
console.log(date1)
