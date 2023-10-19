/** INTERFACE */
interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
}

const person1: Person = {
    name: "Jack",
    age: 25,
    speak(lang: string) {
        console.log(lang)
    },
    spend(amt: number): number {
        console.log(amt);
        return amt;
    }
}
person1.speak('English');
console.log(person1);

const helloPerson = (ps: Person) => console.log(`Hello ${ps.name}`);
helloPerson(person1);