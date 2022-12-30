const date = new Date();

date.setDate(date.getDate() + 6);

console.log(date.toJSON().slice(0, 10));
