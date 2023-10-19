"use strict";
let danhSachSV = [
    {
        msv: "001",
        hoTen: "Hồ Văn Quý",
        anh: "https://toquoc.mediacdn.vn/280518851207290880/2022/12/15/p0dnxrcv-16710704848821827978943.jpg",
        diem: 9,
    },
    {
        msv: "002",
        hoTen: "Võ Tiến Đạt",
        anh: "https://toquoc.mediacdn.vn/280518851207290880/2022/12/15/p0dnxrcv-16710704848821827978943.jpg",
        diem: 9,
    },
    {
        msv: "003",
        hoTen: "Lê Đại Nghĩa",
        anh: "https://toquoc.mediacdn.vn/280518851207290880/2022/12/15/p0dnxrcv-16710704848821827978943.jpg",
        diem: 9,
    },
];
// Hàm tìm kiếm
function findByMsv(msv) {
    const listNew = danhSachSV.filter((e) => {
        return e.msv === msv;
    });
    showData(listNew.length > 0 ? listNew : danhSachSV);
}
// Sự kiện submit form
const formSearch = document.getElementById('form-search');
formSearch.onsubmit = () => {
    const msv = document.getElementById('msv');
    findByMsv(msv.value);
    return false; //vì sử dụng submit và ko muốn load lại trang
};
// Hàm Show
function showData(listDt) {
    const root = document.getElementById('root');
    let _html = '';
    listDt.forEach((e) => {
        _html += `<tr>
        <td>${e.msv}</td>
        <td>${e.hoTen}</td>
        <td><img src=${e.anh} alt="hinh anh" width="50px" /></td>
        <td>${e.diem}</td>
        </tr>`;
    });
    root.innerHTML = _html;
}
showData(danhSachSV);
