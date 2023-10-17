export class Person5 {
    constructor(name){
        this.Name = name //always returns a reference to the current object
    }
    walk= () => console.log(this);
}