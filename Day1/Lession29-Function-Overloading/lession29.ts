//viết gọn cho 2 function add string and add number
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}

//function overloading

function addNew(a: number, b: number): number;

function addNew(a: string, b: string): number;

function addNew(a: any, b: any) {
    return a + b;
}

// console.log(addNew(1,2), addNew("DG","L"));

//Đối với method trong class

class Counter {
    private curent: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let val: number[] = [];
            for (let i = this.curent; i <= target; i++) {
                val.push(i);
            }
            return val;
        }
        return ++this.curent;
    }
}

let counter = new Counter();

console.log(counter.count(10));
console.log(counter.count());
console.log(counter.count(10));
console.log(counter.count());

