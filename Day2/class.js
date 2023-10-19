"use strict";
/** CLASS */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// C1
var Employee = /** @class */ (function () {
    function Employee(name, age, male) {
        this._name = name;
        this._male = male;
        this._age = age;
    }
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return "Name: ".concat(this._name, ", Age: ").concat(this._age, ", Gender Male: ").concat(this._male);
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
var employee = new Employee('Timmy', 23, true);
console.log(employee);
console.log(employee._male);
// employee._male = false;  because it is a read-only property error
console.log(employee.age);
var employee1 = new Employee('Jack', 23, true);
//C2
var NhanVienEm = /** @class */ (function () {
    function NhanVienEm(_name, _age, _male) {
        this._name = _name;
        this._age = _age;
        this._male = _male;
    }
    Object.defineProperty(NhanVienEm.prototype, "age", {
        get: function () {
            return "Name: ".concat(this._name, ", Age: ").concat(this._age, ", Gender Male: ").concat(this._male);
        },
        enumerable: false,
        configurable: true
    });
    return NhanVienEm;
}());
var nhanvien = new NhanVienEm('Johnny', 23, true);
console.log(nhanvien);
console.log(nhanvien._male);
// employee._male = false;  because it is a read-only property error
console.log(nhanvien.age);
// Mảng Employee
console.log("----Mảng Employee---");
var employees = [];
employees.push(employee);
employees.push(employee1);
employees.forEach(function (emp) { return console.log(emp._name, emp._male, '|--|', emp.age); });
