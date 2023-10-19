class Person {
    readonly ssn: string; // readonly giống với const nhưng readonly dùng cho OOP còn const thì dùng cho khai báo biến variable

    constructor(ssn: string) {
        this.ssn = ssn;
    }
}

let person1 = new Person("02139");
// person1.ssn = "213123213"; //Compile Error
console.log(person1); 