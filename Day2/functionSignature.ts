/** FUNCTION SIGNATURE */
let greet: Function;
greet = () => console.log("first");

let getNm: (a: string, b: string) => void
getNm = (name: string, greeting: string) => console.log(`${name} says ${greeting}`);
getNm('loc', 'hello');

let calculate: (a: number, b: number, c: string) => number
calculate = (numOne: number, numTwo: number, action: string) => action === 'add' ? numOne + numTwo : numOne * numTwo;
console.log(calculate(1, 2, 'add'));

type Student = {
    name: string;
    age: number;
}
let printStudent: (student: Student) => void;
printStudent = ({ name, age }: Student) => {
    console.log(`${name} is ${age} years old`)
}
printStudent({ name: 'Loc', age: 23 });
let nam = {
    name: 'Nam',
    age: 25
}
printStudent(nam);
