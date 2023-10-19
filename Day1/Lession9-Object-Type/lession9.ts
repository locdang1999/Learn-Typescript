let person: object = {
    name: "loc"
}; //c1

let personNew = {
    name: "loc"
}; //c2 

// ==> cách 1 và 2 ko quy định được kiểu cho các property(số nhiểu thêm es chuyển thành ies)

let personNews:{
    name: string,
    age: number
} = {
    name: "Loc",
    age: 24
} // c3 là cách sẽ được dùng trong project