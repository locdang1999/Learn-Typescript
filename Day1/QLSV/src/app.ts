type SinhVien = {
    msv: string;
    hoTen: string;
    anh: string;
    diem: number;
};

let danhSachSV: SinhVien[] = [
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
function findByMsv(msv: string) {
    const listNew = danhSachSV.filter((e) => {
        return e.msv === msv;
    })
    showData(listNew.length > 0 ? listNew : danhSachSV);
}

// Sự kiện submit form
const formSearch = document.getElementById('form-search') as HTMLElement;

formSearch.onsubmit = () => {
    const msv = document.getElementById('msv') as HTMLInputElement;
    findByMsv(msv.value);
    return false; //vì sử dụng submit và ko muốn load lại trang
}

// Hàm Show
function showData(listDt: SinhVien[]): void {
    const root = document.getElementById('root') as HTMLElement;
    let _html = '';
    listDt.forEach((e) => {
        _html += `<tr>
        <td>${e.msv}</td>
        <td>${e.hoTen}</td>
        <td><img src=${e.anh} alt="hinh anh" width="50px" /></td>
        <td>${e.diem}</td>
        </tr>`
    })
    root.innerHTML = _html;
}

showData(danhSachSV);

