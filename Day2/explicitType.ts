/** EXPLICIT TYPE */
let myName: string;
let age: number = 23;
let isAuthenticated: boolean;

myName = 'Loc';

// Arrays
let students: string[] = ['nam', 'hung'];

// Union
let mixed: (string | number | boolean)[];
mixed = ['test', 5, true];
mixed.push(6);

let id: string | number;
id = 123;
id = '123';

let hobby: 'book' | 'music';
hobby = "book";
// hobby = "cooking" // Error

//Objects
let person: object;
person = { name: 'Loc', age: 24 };
person = [];

let student: {
    name: string;
    age: number;
    isGood: boolean;
}

student = {
    name: "Loc",
    age: 24,
    isGood: true,
}