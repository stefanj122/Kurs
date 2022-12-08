class Person {

	constructor(name, email, phone) {
	this.name = name;
	this.email = email;
	this.phone = phone;
}
	displayEmail() {
		console.log(this.email);
}
}
const ja = new Person('Stefan','stefan.jeftic122@gmail.com','+38766015800');
ja.displayEmail();
// console.log(ja.email)
class student extends Person {
    constructor(name,email,phone,index){
        super(name,email,phone);
        this.index = index;
    }
}
const stud = new student("Stefan",'stefantic122@gmial.com','066','145/15');

stud.displayEmail();