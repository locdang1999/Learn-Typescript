import { Invoice, Payment } from "./testClassInterFaceModule/classImplementsInterface";
import { HasPrint } from "./testClassInterFaceModule/interfaceForClass";

const docOne: HasPrint = new Invoice('Vinamilk', 'drink milk', 500000);
const docTwo: HasPrint = new Payment('VN Airlines', 'fly', 2500000);

const allDocs: HasPrint[] = [];
allDocs.push(docOne);
allDocs.push(docTwo);
console.log(allDocs);