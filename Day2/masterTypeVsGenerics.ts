// // Chưa sử dụng Generics
// interface User {
//     name: string;
//     age: number;
// }

// interface Company {
//     address: string
// }

// let company: Company = {
//     address: 'tokyo'
// }

// let user: User = {
//     name: 'Johnny',
//     age: 15
// }

// function deepClone(obj: any): any {
//     return JSON.parse(JSON.stringify(obj));
// }

// const testC = deepClone(company);
// const testU = deepClone(user);
// console.log("-----Bài toán để bắt đầu với 'Generics'-----");
// console.log(testC, testU);

// // Sau khi sử dụng Generics
// function deepCloneGenerics<T>(obj: T): T { //T : giả đinh Type 
//     return JSON.parse(JSON.stringify(obj));
// }

// console.log("-----Bắt đầu với 'Generics'-----");
// const testCG = deepCloneGenerics(company);
// const testUG = deepCloneGenerics(user);

// console.log(testCG, testUG, deepCloneGenerics(0)); //nhưng lúc này T chưa được quy định kiểu dữ liệu cụ thể nên truyền vào bất cứ giá trị nào vào deepCloneGenerics điều được

// function deepCloneGenericsWithType<T extends object>(obj: T): T { // extends: Kiểm tra để quy định T chỉ nhận vào giá trị là object
//     return JSON.parse(JSON.stringify(obj));
// }

// console.log("-----Rằng buộc 'Type' trong 'Generics' với từ khóa 'extends'-----");
// const testCGT = deepCloneGenericsWithType(company);
// const testUGT = deepCloneGenericsWithType(user);
// // const testType = deepCloneGenericsWithType(0); // đối số loại number ko thể gán cho tham số loại đối tượng

// console.log(testCGT, testUGT);

// interface Teachers extends User {
//     id: string
// }

// interface Students extends User {
//     class: string
// }

// let studentG: Students = {
//     name: 'Jimmy',
//     age: 15,
//     class: '10A1'
// }

// const testSGT = deepCloneGenericsWithType(studentG);
// console.log("-----Rằng buộc trong 'Generics' với từ khóa 'extends'-----");
// console.log(testSGT);

// // Type never

// type CheckUser<T> = T extends User ? T : never;

// type TestCheckComp = CheckUser<Company>;
// type TestCheckTeach = CheckUser<Teachers>;

// function testCheck<T>(arg: CheckUser<T>) {
//     console.log("-----Function check type với kiểu type mới 'never'-----");
//     console.log(arg);
// }
// // testCheck(company); // Đối số của 'Company' không thể gán cho tham số của loại 'never'
// testCheck(studentG);

// //Union type trong generics
// let arrays = [];

// type StringOrNumber = string | number | boolean;

// function store(item: StringOrNumber) {
//     arrays.push(item);
// }

// type CallbackFunc<T> = (item: T, index: T) => void;

// class Arr<T> {
//     forEach(callback: CallbackFunc<T>) {

//     };
//     map(callback: CallbackFunc<T>) {

//     }
// }

// let testArr: Arr<number> = [1, 2, 3, 4];
// console.log(testArr);
// testArr.forEach((itm, i) => console.log(itm, i));

// // chuyển đổi Array thành union type dù giá trị là chuỗi, hay số, hay ... không liên quan đến việc truyển type 'number' vào ArrNumber
// type ArrNumber = [0, 1, 2, 3, 4, 5];
// type UnionArr = ArrNumber[number];

// // Dùng Record chuyển Union type thành 'Key'
// type Colors = 'red' | 'blue' | 'green';
// type RGB = Record<Colors, number>;

// let a: RGB = {
//     red: 1,
//     blue: 2,
//     green: 3
// }

// //Tạo type Record
// type RecordFake<UnionType extends string, ValueType = string> = { //Có thể đặt default cho ValueType bằng cách ValueType=string
//     [Key in UnionType]: ValueType
// }

// type RGBFake = Record<Colors, number>;

// let aFake: RGBFake = {
//     red: 4,
//     blue: 5,
//     green: 6
// }

// type UserTp = {
//     name: string;
//     company: {
//         address: string;
//     }
// }

// //Tạo company trực tiếp từ User
// type CompanyTp = UserTp['company'];
// let companyTp: CompanyTp = {
//     address: "Tp.HCM"
// }
// console.log(companyTp);

// type Query = {
//     [key: string]: string
// }

// let testABC: Query = {
//     tr: '1'
// }

// let jack = {
//     name: 'Jack',
//     age: 19
// }
// type UserFake = typeof jack;

// enum jmm {
//     name = 'jmm',
//     age = 19
// }
// type UserFakeEnum = typeof jmm;

// type UserTest = {
//     [Key in keyof typeof jmm]: string // 'keyof' biến tất cả các 'Key' sang 'Union Type' => 'name'|'age'
// }

// type UserTestRecordType = Record<keyof UserTp, number>;
// type UserTestRecordEnum = Record<keyof typeof jmm, string>;


// type Maximum_Color = 256;
// type ComputedRange<N extends number, Result extends Array<unknown> = []> = (
//     Result['length'] extends N ? Result : ComputedRange<N, [...Result, Result['length']]>
// )
// type ZeroTo256 = ComputedRange<Maximum_Color>[number];
// type RGBReal = {
//     [Key in Colors]: ZeroTo256
// }

// let red: RGBReal = {
//     red: 1,
//     blue: 2,
//     green: 3
// }
