import { Person5 } from "./Person";

export default class Teacher3 extends Person5{

    constructor(name, degree){
        super(name); //calling the constructor from father with super
        this.Degree = degree;
    }
    teach = () => console.log("teach");
}

export function promotion (){ console.log('Testing Promotion')};