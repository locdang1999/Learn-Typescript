"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DanSachNV_1 = require("./DanSachNV");
const NhanVien_1 = require("./NhanVien");
let listNv = new DanSachNV_1.DanhSachNV();
function addNv() {
    //Lấy dữ liệu người dùng nhập vào
    let maNv = parseInt(document.getElementById("maNV").value);
    let tenNv = document.getElementById("tenNV").value;
    let luongCb = parseInt(document.getElementById("luongCB").value);
    let gioLam = parseInt(document.getElementById("gioLam").value);
    let loaiNv = parseInt(document.getElementById("chucVu").value);
    //Khởi tạo đối tượng nhân viên
    let nv = new NhanVien_1.NhanVien(maNv, tenNv, luongCb, loaiNv);
    console.log(nv);
    //Thêm nhân viên vào danh sách nhân viên\
    listNv.ThemNv(nv);
    updateListNv();
}
function addElemTD(classNm, val) {
    let td = document.createElement("td");
    td.className = classNm;
    td.innerHTML = val;
    return td;
}
function updateListNv() {
    //Dom đến tbody ds nhân viên
    let tblDSNv = document.getElementById("table-NhanVien");
    //Clear
    tblDSNv.innerHTML = "";
    for (let nv of listNv.DanhSachNhanVien) {
        let addMaNv = addElemTD('tbMaNv', nv.MaNV);
        let addName = addElemTD('tbHoTen', nv.HoTen);
        let addChucVu = addElemTD('tbChucVu', nv.LayLoaiNv());
        let addLuongCb = addElemTD('tbLuongCb', nv.LuongCB);
        let addTotalLuong = addElemTD('tbTongLuong', nv.tinhLuongNv());
        // Tạo thẻ tr
        let trNv = document.createElement('tr');
        trNv.appendChild(addMaNv);
        trNv.appendChild(addName);
        trNv.appendChild(addChucVu);
        trNv.appendChild(addLuongCb);
        trNv.appendChild(addTotalLuong);
        tblDSNv.appendChild(trNv);
    }
}
// Thêm event cho button
document.getElementById('btn-Them').addEventListener("click", addNv);
//# sourceMappingURL=main.js.map