class ProductModel {
    private _id?: string;
    private _name?: string;
    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}

interface CRUD {
    create(): void;
    update(): void;
    read(): void;
    delete(masp: string): void;
}

class ProductSvc implements CRUD {
    private listSp?: any;

    constructor() {
        let getLocalStg: any = localStorage.getItem('product') ? localStorage.getItem('product') : JSON.stringify([]);
        this.listSp = JSON.parse(getLocalStg);
    }

    create(): void {
        // const btnSmt = document.getElementById('smt') as HTMLElement;

        // btnSmt.onsubmit = (e) => {
        //     e.preventDefault();
        //     const msp: string = (document.getElementById('pdId') as HTMLInputElement).value;
        //     const tensp: string = (document.getElementById('pdNm') as HTMLInputElement).value;
        //     let sp = new ProductModel(msp, tensp);
        //     this.listSp.push(sp);
        //     localStorage.setItem('product', JSON.stringify(this.listSp));
        //     this.read();
        //     const form = document.getElementById('smt') as HTMLFormElement;
        //     form.reset();
        //     return false; //vì sử dụng submit và ko muốn load lại trang
        // }

        const msp: string = (document.getElementById('pdId') as HTMLInputElement).value;
        const tensp: string = (document.getElementById('pdNm') as HTMLInputElement).value;
        if (msp === "" || tensp === "") {
            return;
        }
        let sp = new ProductModel(msp, tensp);
        this.listSp.push(sp);
        localStorage.setItem('product', JSON.stringify(this.listSp));
        this.read();
        const form = document.getElementById('smt') as HTMLFormElement;
        form.reset();

    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    read(): void {
        const rootTb = document.getElementById('root') as HTMLElement;
        let _html = '';
        this.listSp.forEach((e: any, i: number) => {
            return _html += `<tr>
            <td>${i + 1}</td>
            <td>${e._id}</td>
            <td>${e._name}</td>
            <td><button type="button" class="btn btn-danger" id="${e._id}" onclick="delRow(this)">Xóa</button></td>
            </tr>`
        })
        rootTb.innerHTML = _html;
    }
    delete(masp: string): void {
        const delSp = this.listSp.filter((item:any) => item._id !== masp);
        this.listSp = delSp;
        localStorage.setItem('product', JSON.stringify(this.listSp));
        this.read();
    }

}


let App = new ProductSvc();
// App.create(); //Cách 1
App.read();

const btnSmt = document.getElementById('smt') as HTMLElement;

btnSmt.onsubmit = (e) => {
    e.preventDefault();
    App.create();
    return false; //vì sử dụng submit và ko muốn load lại trang
}

function delRow(e: any) {
    App.delete(e.id)
}

