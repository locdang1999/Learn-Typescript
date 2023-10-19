let sum = (x: number, y: number, z: boolean = false) => {
    if (!z) return x + y;

    if (z) return x - y;
}

console.log(sum(10, 5), sum(10, 5, true));