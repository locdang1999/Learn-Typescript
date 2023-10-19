//Alias: thay vì gán trực tiếp union cho biến thì ta có thể tạo biến để lưu union type
type numStringVar = number | string;
function addNumberOrString(a: numStringVar, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
}

console.log(addNumberOrString(6, 9));

type User = {
    name: string,
    age: number
}

type StudentTp = User & { // &: thay cho kế thừa trong từ khóa "Type"
    classNm: string,
    studentId: string,
}

let userJack: StudentTp = {
    classNm: "11A1",
    studentId: "11A1N1",
    name: "Jack",
    age: 16
}