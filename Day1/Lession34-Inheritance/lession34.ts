class Person {
    constructor(private firstNm: string, private lastNm: string) {
        this.firstNm = firstNm;
        this.lastNm = lastNm;
    }
    getFullNm(): string {
        return `${this.firstNm} ${this.lastNm}`;
    }
    describe(): string {
        return `This is ${this.firstNm} ${this.lastNm}.`;
    }
}

class Employee extends Person {
    private jobTitle: string;
    constructor(firstNm: string, lastNm: string, jobTitle: string) {
        super(firstNm, lastNm);
        this.jobTitle = jobTitle;
    }

    //Overwrite or overloading
    describe(): string {
        return `${super.describe()} Describe ${this.jobTitle}.`;
    }
}

let empl = new Employee("Loc", "Dang", "IT");
console.log(empl.describe());
console.log(empl.getFullNm());