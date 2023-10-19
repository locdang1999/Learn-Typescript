const sum = (x: number, y: number, z?: number) => { // lúc này z có cũng được ko có cũng được
    if (z) return x + y + z;
    return x + y;
}
console.log(sum(1, 2), sum(1, 2, 3));