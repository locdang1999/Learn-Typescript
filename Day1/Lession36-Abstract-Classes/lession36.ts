abstract class Employee {
    constructor(private firstName: string, private lasteName: string) {

    }

    abstract getSalary(): number; // abstract method

    // Normal
    get fullName(): string {
        return `${this.firstName} ${this.lasteName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month`;
    }
}

// const empl = new Employee("Loc","Dang"); // không thể new 1 abstract vì nó sinh ra ko để nhân bản mà nó sinh ra để làm hình mẫu cho các class khác

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lasteName: string, private salary: number) {
        super(firstName, lasteName); //dùng supper kế thừa lại cha
    }

    //bắt thuộc phải viết lại method abstract ở trên

    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lasteName: string, private rate: number, private hours: number) {
        super(firstName, lasteName); //dùng supper kế thừa lại cha
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

const empl = new FullTimeEmployee("Loc", "Dang", 1000);
console.log(empl.compensationStatement());