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

//OBJECTS
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

//this keyword
const person1 = {
    name: "Frank",
    walk() {
        console.log(this);
    }
}

person1.walk();  //this is referencing the person object

const walk = person.walk.bind(person);
walk();  //this is referencing the global object or window.

//this in JS does not always self reference.


//ARROW FUNCTIONS
const square = function(number){
    return number * number;
}

//one parameter only, no parenthesis
const square2 = number =>{
    return number * number;
}

//only one line and return a value
const square3 = number => number * number;

console.log(square(2));
console.log(square2(3));
console.log(square3(4));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

//this is a predicate function because takes an object as argument
//filter iterates over all the array
const activeJobs = jobs.filter(function(job){ return job.isActive; })

const activeJobs1 = jobs.filter ( job => job.isActive );
//this can be used to return a list of all enrolled students.

console.log(activeJobs);
console.log(activeJobs1);

//ARROW Functions and this
//dont rebind this
const person2 = {
    talk() {
        var self = this; //this creates a reference to this to be used in the function
        setTimeout(function () {  //callback function
            console.log("self", self); //here is not part of any object
        }, 1000); //timeout to delay an execution
    }
}

person2.talk(); //its a stand-alone object, returns window

const person3 = {
    talk() {
        //the arrow function do not reset the this reference.  Callbacks, yes
        setTimeout( () => {  //callback function
            console.log("this", this); //here is not part of any object
        }, 1000); //timeout to delay an execution
    }
}

person3.talk(); //its a stand-alone object, returns window