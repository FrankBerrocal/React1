/*
var =  dont use it.
let =block only, dunamic value.
const = block only, static value.
function sayHello(){
    for (var i =0; i<5; i++){
        console.log(i);
    }
}

sayHello();*/

const person = {
    name: "Frank",
    walk() {},
    talk(){}
}

person.talk();
person['name'] = 'John';

//use the code dynamically

const username = 'name';
person[username] = 'Frankie';

console.log(person.name);