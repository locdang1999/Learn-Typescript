function addNumberOrString(a: number | string, b: number|string) { //thay dùng any ta nên dùng union type bằng cách dùng dấu (|) cho các type bạn muốn truyền
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings"); //Lỗi khi running khi truyền biến khác đk
}

console.log(addNumberOrString(6, 9)); // lúc này khi gọi func mà truyền khác type thì sẽ báo lỗi ngay lúc compile code