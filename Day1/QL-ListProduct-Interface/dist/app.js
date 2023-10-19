"use strict";
class ProductModel {
    constructor(id, name) {
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
class ProductSvc {
    constructor() {
        let getLocalStg = localStorage.getItem('product') ? localStorage.getItem('product') : JSON.stringify([]);
        this.listSp = JSON.parse(getLocalStg);
    }
    create() {
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
        const msp = document.getElementById('pdId').value;
        const tensp = document.getElementById('pdNm').value;
        if (msp === "" || tensp === "") {
            return;
        }
        let sp = new ProductModel(msp, tensp);
        this.listSp.push(sp);
        localStorage.setItem('product', JSON.stringify(this.listSp));
        this.read();
        const form = document.getElementById('smt');
        form.reset();
    }
    update() {
        throw new Error("Method not implemented.");
    }
    read() {
        const rootTb = document.getElementById('root');
        let _html = '';
        this.listSp.forEach((e, i) => {
            return _html += `<tr>
            <td>${i + 1}</td>
            <td>${e._id}</td>
            <td>${e._name}</td>
            <td><button type="button" class="btn btn-danger" id="${e._id}" onclick="delRow(this)">Xóa</button></td>
            </tr>`;
        });
        rootTb.innerHTML = _html;
    }
    delete(masp) {
        const delSp = this.listSp.filter((item) => item._id !== masp);
        this.listSp = delSp;
        localStorage.setItem('product', JSON.stringify(this.listSp));
        this.read();
    }
}
let App = new ProductSvc();
// App.create(); //Cách 1
App.read();
const btnSmt = document.getElementById('smt');
btnSmt.onsubmit = (e) => {
    e.preventDefault();
    App.create();
    return false; //vì sử dụng submit và ko muốn load lại trang
};
function delRow(e) {
    App.delete(e.id);
}
