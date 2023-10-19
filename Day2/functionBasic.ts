/** Function */
const square = (side: number) => side * side
console.log(square(3));

let greet: Function
greet = () => console.log("first");
greet();

const add = (a: number, b: number, c: number) => a + b + c
console.log(add(1, 2, 3));

const addNumAndString = (a: number, b: number, c?: number | string) => {
    console.log(a, b, c);
}
addNumAndString(1, 2, 'string');
addNumAndString(1, 2);

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log(a, b, c)
}
addDefault(1, 2);

const minus = (a: number, b: number): number => a - b;
console.log(minus(10, 5));