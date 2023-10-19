/********************Start-Primitive Or Basic Types (kiểu dữ liệu nguyên thủy) **************************/

let count: number = 1; //Gán giá trị ban đầu or cũng có thể không
// let count: number; // nhưng phải được gán giá trị trước khi sử dụng 
// count = 'name'; //error với ts nhưng pass với js

console.log(count);

let nameUser: string = "Jhonny";
console.log(nameUser, typeof nameUser);

//template strings
let content: String = `Age ${count}, name ${nameUser}.`;
console.log(content, typeof content);

let flag : boolean = true;
console.log(flag, typeof flag);

/********************End-Primitive Or Basic Types (kiểu dữ liệu nguyên thủy) **************************/

/********************Start-References Types (Kiểu dữ liệu tham chiếu) **************************/

let listName: string[] = ['Java', 'TS', 'JS']; //Mảng chỉ chứa String
// listName.push(25);//Error
listName.push("C");
console.log(listName, typeof listName);

/********************End-References Types (Kiểu dữ liệu tham chiếu) ****************************/