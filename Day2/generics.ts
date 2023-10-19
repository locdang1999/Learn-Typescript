/** GENERICS */

type strArr = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
console.log(l1);

//Tuple trong generics
console.log("-***Generics Basic***-");
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]; // T tham chiếu type cho các phần tử mảng
const l3 = lastT([1, 2, 3]);
console.log(l3);
const l4 = lastT([1, 2, '3']);
console.log(l4);
const l5 = lastT(["Tommy", "Jerry", 'Jhon']);
console.log(l5);
const l6 = lastT<string>(["Tommy", "Jerry", 'Jhon']); // cố định T là kiểu string

/** */
console.log("-***Generics Function***-");
const makeArr = (x: number) => [x];
const makeArr1 = makeArr(5);
console.log(makeArr1);

// => chuyển về generics
const makeArrT = <T>(x: T) => [x];
const makeArr2 = makeArrT("test");
console.log(makeArr2, makeArrT(2));

/** */
console.log("-***Generics Tuple Param***-");

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
console.log(makeArrXY(1, 2), makeArrXY(1, "Test"), makeArrXY("test", true));
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const makT = makeTuple<string | null, number>(null, 3);
console.log(makeTuple(1, 2), makeTuple(1, "Test"), makeTuple<string, number>("test", 10), makT);

console.log("-***Generics Tuple Default Param***-");

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const makTWD = makeTupleWithDefault<string | null>('a', 3);
console.log(makTWD);

// Generics extends
// const makeFullNm = obj => ({
//     ...obj,
//     fullNm: `${obj.firstNm} ${obj.lastNm}`
// });

const makeFullNmConstraint = (obj: { firstNm: string, lastNm: string }) => ({
    ...obj,
    fullNm: `${obj.firstNm} ${obj.lastNm}`
});

const n1 = makeFullNmConstraint({ firstNm: "Tom", lastNm: 'Jerry' });
console.log(n1);

const makeFullNmConstraintWithGenerics = <T extends { firstNm: string, lastNm: string }>(obj: T) => ({
    ...obj,
    fullNm: `${obj.firstNm} ${obj.lastNm}`
});

const n2 = makeFullNmConstraintWithGenerics({ firstNm: "Tom", lastNm: 'Jerry', age: 30 });
console.log(n2);

// Chưa dùng Generics lúc employee sẽ ko hiểu được trong object có gì
const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}
const emp1 = addNewEmployee({ name: 'Jhonny', age: 24 });
console.log(emp1);
// console.log(emp1.name); error

// Đã dùng Generics
const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}
const emp2 = addNewEmployeeT({ name: 'Jhonny', age: 24, mail: "tesst.@gmail.com" });
console.log(emp2.mail);

const addNewEmployeeTWithConstraint = <T extends { name: string }>(empl: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...empl,
        uid
    }
}
const emp3 = addNewEmployeeTWithConstraint({ name: 'Jimmy', age: 24, mail: "jim.@gmail.com" });

// GENERICS in INTERFACE

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

type NumberResource = Resource<number[]>;

const nb: NumberResource = {
    uid: 1,
    name: "Jack",
    data: [1, 2, 3]
}

const resrc: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'Hello'
}

const resrc1: Resource<object> = {
    uid: 1,
    name: 'Person',
    data: {
        name: 'Avenger'
    }
}

const resrc2: Resource<string[]> = {
    uid: 1,
    name: 'Person',
    data: ['Avenger']
}
