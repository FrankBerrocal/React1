import { Teacher2 } from "./Teacher";
import { promote } from "./Teacher";
import Teacher3, { promotion } from "./Teacher2";

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

//OBJECTS********************************************************************************
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


//ARROW FUNCTIONS****************************************************************
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

//ARROW Functions and this********************************************************
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


//MAP
//render lists
const colors = ['red', 'green', 'blue'];
const items = colors.map(color =>`<l1>${color}</l1>`);//anything in the braces is rendered dynamically in runtime
console.log(items);

//OBJECT RESTRUCTURING***********************************************

const address = {
    street: '1212',
    city: 'Calgary',
    country: 'Canada'
}

//we need to get the value of all parameters and save them in individual variables.

//normally, we will do:

/*const street = address.street;
const city = address.city;
const country = address.country;*/

const { street, city, country: ct } = address;  //this is the same. Keep the order correct

console.log(street, city, ct);


//SPREAD OPERATOR**************************************************

const first = [ 1, 2, 3];
const second = [4, 5, 6];

//combine them
const combined = [...first, 'a', ...second, 'b']; //

console.log(combined);

const clone = [...first]; //creates exact copy.

const firstname ={ name: 'frank' };
const job = { job : 'analyst'};

const combinedObject = {...firstname, ...job, location: 'Canada'};
console.log(combinedObject);



//CLASSES*********************************************************************************
class Person4 {
    constructor(name){
        this.Name = name //always returns a reference to the current object
    }
    walk= () => console.log(this);
}

const john = new Person4('John');
john.walk();


//INHERITANCE*********************************************************************************

class Teacher extends Person4{

    constructor(name, degree){
        super(name); //calling the constructor from father with super
        this.Degree = degree;
    }
    teach = () => console.log("teach");
}

const teacher = new Teacher('Frank', 'Master');
console.log(teacher.walk());

//programmer humor
class Llama {
    constructor(llama){
        this.Lllama = llama;
    }
    llamando = () => console.log('La llama que llama');
}

const llama = new Llama('Llama');
llama.llamando();

//MODULES  classes moved to independent files, use export to make them public, and import on 
//any class extending a father.

const newTeacher = new Teacher2('Frank', 'Bachelor');
console.log(newTeacher.walk())
promote();  //this function does not belgon to the class


const teach = new Teacher3('Luis', 'Diploma');
console.log(teach.walk());
promotion();