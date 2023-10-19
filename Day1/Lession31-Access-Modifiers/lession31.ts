class Employee {
    public empCd: string; // cho phạm vi chỉnh sửa 
    private empNm: string; //không thể sửa đổi được (immutable)
    protected empPhone: string;// giống private,  lớp con cũng ko thể truy cập

    constructor(empCd: string, empNm: string, empPhone: string) {
        this.empCd = empCd;
        this.empNm = empNm;
        this.empPhone = empPhone;
    }
}

// let emp = new Employee("123", "Dang");
// emp.empCd = "456";
// // emp.empNm = "Loc"; // Dùng private nên báo lỗi, do chỉ truy cập bên trong class => không thể truy cập ngoài class
// console.log(emp);

class SalesEmployee extends Employee {
    private department: string;

    constructor(code: string, name: string, phone: string, department: string) {
        super(code, name, phone);
        this.department = department;
    }

    getInfo():string {
        return `${this.empPhone}`;
    }
}

let sales = new SalesEmployee("123", "Loc", "123434134", "Sales");
//sales.empPhone //không thể truy cập
//sales.empNm //không thể truy cập
console.log(sales, sales.getInfo());