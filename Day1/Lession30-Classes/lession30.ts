class Person {
    ssn: string;
    firstNm: string;
    lastNm: string;

    constructor(ssn: string, firstNm: string, lastNm: string) {
        this.ssn = ssn;
        this.firstNm = firstNm;
        this.lastNm = lastNm;
    }

    getFullNm(): string {
        return `${this.firstNm} ${this.lastNm}`;
    }
}

let person1 = new Person("02139", "Loc", "Dang");
console.log(person1.getFullNm(), person1); 