//spreed syntax vs rest => coppy all

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));

function multiply(n: number, ...m: number[]) {
    return m.map((num) => n * num);
}

console.log(multiply(10, 1, 2, 3, 4))