class Circle {
    static pi: number = 3.14;
    public test: number = 69;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

let cic = new Circle();
// cic.pi // Error: vì khi new 1 class thì sẽ ko gọi được biến static
console.log(Circle.pi);