import { Person5 } from "./Person";

export function promote (){ console.log('Testing teach')};


export class Teacher2 extends Person5{

    constructor(name, degree){
        super(name); //calling the constructor from father with super
        this.Degree = degree;
    }
    teach = () => console.log("teach");
}