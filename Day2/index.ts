// Chưa sử dụng Generics
interface User {
    name: string;
    age: number;
}

interface Company {
    address: string
}

let company: Company = {
    address: 'tokyo'
}

let user: User = {
    name: 'Johnny',
    age: 15
}

function deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
}

const testC = deepClone(company);
const testU = deepClone(user);
console.log("-----Bài toán để bắt đầu với 'Generics'-----");
console.log(testC, testU);

// Sau khi sử dụng Generics
function deepCloneGenerics<T>(obj: T): T { //T : giả đinh Type 
    return JSON.parse(JSON.stringify(obj));
}

console.log("-----Bắt đầu với 'Generics'-----");
const testCG = deepCloneGenerics(company);
const testUG = deepCloneGenerics(user);

console.log(testCG, testUG, deepCloneGenerics(0)); //nhưng lúc này T chưa được quy định kiểu dữ liệu cụ thể nên truyền vào bất cứ giá trị nào vào deepCloneGenerics điều được

function deepCloneGenericsWithType<T extends object>(obj: T): T { // extends: Kiểm tra để quy định T chỉ nhận vào giá trị là object
    return JSON.parse(JSON.stringify(obj));
}

console.log("-----Rằng buộc 'Type' trong 'Generics' với từ khóa 'extends'-----");
const testCGT = deepCloneGenericsWithType(company);
const testUGT = deepCloneGenericsWithType(user);
// const testType = deepCloneGenericsWithType(0); // đối số loại number ko thể gán cho tham số loại đối tượng

console.log(testCGT, testUGT);

interface Teachers extends User {
    id: string
}

interface Students extends User {
    class: string
}

let studentG: Students = {
    name: 'Jimmy',
    age: 15,
    class: '10A1'
}

const testSGT = deepCloneGenericsWithType(studentG);
console.log("-----Rằng buộc trong 'Generics' với từ khóa 'extends'-----");
console.log(testSGT);

// Type never

type CheckUser<T> = T extends User ? T : never;

type TestCheckComp = CheckUser<Company>;
type TestCheckTeach = CheckUser<Teachers>;

function testCheck<T>(arg: CheckUser<T>) {
    console.log("-----Function check type với kiểu type mới 'never'-----");
    console.log(arg);
}
// testCheck(company); // Đối số của 'Company' không thể gán cho tham số của loại 'never'
testCheck(studentG);

//Union type trong generics
let arrays = [];

type StringOrNumber = string | number | boolean;

function store(item: StringOrNumber) {
    arrays.push(item);
}

type CallbackFunc<T> = (item: T, index: T) => void;

class Arr<T> {
    forEach(callback: CallbackFunc<T>) {

    };
    map(callback: CallbackFunc<T>) {

    }
}

let testArr: Arr<number> = [1, 2, 3, 4];
console.log(testArr);
testArr.forEach((itm, i) => console.log(itm, i));

// chuyển đổi Array thành union type dù giá trị là chuỗi, hay số, hay ... không liên quan đến việc truyển type 'number' vào ArrNumber
type ArrNumber = [0, 1, 2, 3, 4, 5];
type UnionArr = ArrNumber[number];

// Dùng Record chuyển Union type thành 'Key'
type Colors = 'red' | 'blue' | 'green';
type RGB = Record<Colors, number>;

let a: RGB = {
    red: 1,
    blue: 2,
    green: 3
}

//Tạo type Record
type RecordFake<UnionType extends string, ValueType = string> = { //Có thể đặt default cho ValueType bằng cách ValueType=string
    [Key in UnionType]: ValueType
}

type RGBFake = Record<Colors, number>;

let aFake: RGBFake = {
    red: 4,
    blue: 5,
    green: 6
}

type UserTp = {
    name: string;
    company: {
        address: string;
    }
}

//Tạo company trực tiếp từ User
type CompanyTp = UserTp['company'];
let companyTp: CompanyTp = {
    address: "Tp.HCM"
}
console.log(companyTp);

type Query = {
    [key: string]: string
}

let testABC: Query = {
    tr: '1'
}

let jack = {
    name: 'Jack',
    age: 19
}
type UserFake = typeof jack;

enum jmm {
    name = 'jmm',
    age = 19
}
type UserFakeEnum = typeof jmm;

type UserTest = {
    [Key in keyof typeof jmm]: string // 'keyof' biến tất cả các 'Key' sang 'Union Type' => 'name'|'age'
}

type UserTestRecordType = Record<keyof UserTp, number>;
type UserTestRecordEnum = Record<keyof typeof jmm, string>;

//Tạo type RGBReal với độ dài từ 0-256
type Maximum_Color = 256;
type ComputedRange<N extends number, Result extends Array<unknown> = []> = (
    Result['length'] extends N ? Result : ComputedRange<N, [...Result, Result['length']]>
)
type ZeroTo256 = ComputedRange<Maximum_Color>[number];
type RGBReal = {
    [Key in Colors]: ZeroTo256
}

let red: RGBReal = {
    red: 1,
    blue: 2,
    green: 3
}

let fruit = {
    apple: 1,
    banana: 3
};

//Basic
type SingleFruit = {
    apple: number
} | {
    banana: number
}
//Custom bằng cách lập qua tất cả các Key để tạo ra type Union ở trên
type FruitCount = {
    [Key in keyof typeof fruit]: {
        [Key2 in Key]: number
    }
}[keyof typeof fruit];

type Entity = {
    type: 'User'
} | {
    type: 'Post'
} | {
    type: 'Comment'
}

type EntityId = {
    type: 'User',
    userId: number
} | {
    type: 'Post',
    postId: number
} | {
    type: 'Comment',
    commentId: number
}

//Template Type
type stringTemPlate = `${string}-${number}`;
type stringTemPlateGRB = `${Colors}-${ZeroTo256}`;
let testStrTpGRB: stringTemPlateGRB = 'blue-100';

// &: And Type
type EntityIdTp = {
    [EntityIdType in Entity['type']]: {
        type: EntityIdType
    } & { //& : And type
        [Key in `${EntityIdType}Id`]: number
    }
}[Entity['type']];

//Bài tập Generics and Type
let techF = {
    name: 'TS',
    age: 10,
    company: {
        address: 'HCM'
    }
}

function testTechF<Obj extends object, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
    return obj[key];
};

let testVal = testTechF(techF, 'company');

// Omit trong Utility Types
function removeKey<Obj extends object, Key extends keyof Obj>(obj: Obj, key: Key): Omit<Obj, Key> {
    delete obj[key];
    return obj;
}
let testDeleteKey = removeKey(techF, 'company');
console.log(testDeleteKey);

function removeArrKey<Obj extends object, Key extends keyof Obj>(obj: Obj, ...keys: Key[]): Omit<Obj, Key> {
    keys.forEach(key => delete obj[key]);
    return obj;
}
let testDeleteArrKey = removeArrKey(techF, 'company', 'age');
console.log(testDeleteArrKey);

type PickPromise<Obj> = Obj extends Promise<infer R> ? R : never; //infer cho phép suy ra kiểu dữ liệu bên trong của Promise

type CheckProms = PickPromise<Promise<EntityId>>;

const promise: Promise<EntityId> = new Promise(resolve => {
    resolve({
        type: 'User',
        userId: 1
    })
});
console.log(promise);

type Par<Obj> = {
    [key in keyof Obj]?: Obj[key];
}

type RequiredFake<Obj> = {
    [key in keyof Obj]-?: Obj[key];
}

type Unique<T extends string> = Exclude<T, ''> & Exclude<T, ''>;

type ReturnTypeTest<T> = T extends (...args: any[]) => infer R ? R : never;

type TestDoc = ReturnTypeTest<typeof document>
