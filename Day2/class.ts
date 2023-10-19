/** CLASS */

// C1
export class Employee {
    public _name: string; // Được truy cập từ bên ngoài mà sửa đổi từ bên ngoài
    private _age: number; // Không được cập nhật và sửa đổi từ bên ngoài
    readonly _male: boolean; // Được truy cập từ bên ngoài nhưng không sửa đổi được.

    constructor(name: string, age: number, male: boolean) {
        this._name = name;
        this._male = male;
        this._age = age;
    }

    get age() {
        return `Name: ${this._name}, Age: ${this._age}, Gender Male: ${this._male}`
    }
}

const employee = new Employee('Timmy', 23, true);
console.log(employee);
console.log(employee._male);
// employee._male = false;  because it is a read-only property error
console.log(employee.age);
const employee1 = new Employee('Jack', 23, true);

//C2
class NhanVienEm {
    constructor(public _name: string, private _age: number, readonly _male: boolean) { }

    get age() {
        return `Name: ${this._name}, Age: ${this._age}, Gender Male: ${this._male}`
    }
}

const nhanvien = new NhanVienEm('Johnny', 23, true);
console.log(nhanvien);
console.log(nhanvien._male);
// employee._male = false;  because it is a read-only property error
console.log(nhanvien.age);

// Mảng Employee
console.log("----Mảng Employee---")
let employees: Employee[] = [];
employees.push(employee);
employees.push(employee1);
employees.forEach((emp) => console.log(emp._name, emp._male, '|--|', emp.age))
