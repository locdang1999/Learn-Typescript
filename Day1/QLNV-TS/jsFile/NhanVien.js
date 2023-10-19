"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
class NhanVien {
    // Hàm khởi tạo
    constructor(maNV, hoTen, luongCB, loaiNV) {
        this.MaNV = maNV;
        this.HoTen = hoTen;
        this.LuongCB = luongCB;
        this.LoaiNV = loaiNV;
    }
    tinhLuongNv() {
        let tongLuong = 0;
        switch (this.LoaiNV) {
            case 1:
                tongLuong = this.LuongCB;
                break;
            case 2:
                tongLuong = this.LuongCB * 1.5;
                break;
            case 3:
                tongLuong = this.LuongCB * 3;
                break;
            default:
                tongLuong = this.LuongCB;
                break;
        }
        return tongLuong;
    }
    LayLoaiNv() {
        let tongLuong = "";
        switch (this.LoaiNV) {
            case 1:
                tongLuong = "Nhân viên";
                break;
            case 2:
                tongLuong = "Quản lý";
                break;
            case 3:
                tongLuong = "Giám đốc";
                break;
            default:
                tongLuong = "Nhân viên";
                break;
        }
        return tongLuong;
    }
}
exports.NhanVien = NhanVien;
//# sourceMappingURL=NhanVien.js.map