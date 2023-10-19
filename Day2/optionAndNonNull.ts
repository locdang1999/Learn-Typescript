/** OPTIONAL AND NON NULL */
const addOp = (a: number, b?: number) => b ? a + b : a;
addOp(1, 2);
addOp(3);

const addNonNull = (a: number, b?: number) => a + b!; // Trong trường hợp này "!" hiểu là: non null
console.log(addNonNull(3))