//Tuple: a stucture of data that has several part
//Định nghĩa: Hoạt động giống Array tuy nhiên có thêm một vài quy định bắt buộc
// + Số phần tử được khai báo trước (cố định)
// + Type của từng phần tử trong Array cần được khai báo trước, và không nhất thiết phải giống nhau
// Note: Tuple: Quy định mảng có bao nhiêu giá trị và giá trị của nó là type gì
//Tuple: DataType/size/order
let skill: [string,number] = ["Typescript", 3];
console.log(skill);
skill.push("dsdasd");
console.log(skill);
//Lúc này Ts sẽ ko validate được khi ta push phần tử mới vào mà Ts hiểu là có 2 loại type muốn truyền tiếp loại nào cũng được .
//Muốn validate được nó ta phải biến kiểu typle thành readonly
let skill2: readonly[string,number] = ["Typescript", 3];
// skill2.push(); //error
console.log(skill2);
//có thêm optional tuple element tức nghĩa là biến cuối cùng truyền vào tuple có thể có or không
let color: [number, number, number, number?];
color = [0,0,0]
console.log(color);