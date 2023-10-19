class Person {
    private _age: number;
    public lastNm: string;
    public firstNm: string;

    constructor(_age: number, lastNm: string, firstNm: string) {
        this._age = _age;
        this.firstNm = firstNm;
        this.lastNm = lastNm;
    }

    //Getter
    get age() {
        return this._age;
    }

    //Setter
    set age(age: number) {
        if (age < 0 || age > 150) {
            throw Error("Invalid age")
        }
        this._age = age;
    }
}

let person = new Person(10, "Dang", "Loc");
person.age = 100; //setter
console.log(person.age); //getter