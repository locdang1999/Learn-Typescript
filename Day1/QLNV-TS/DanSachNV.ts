import {NhanVien} from './NhanVien';

export class DanhSachNV {
    public DanhSachNhanVien: Array<NhanVien>  = new Array<NhanVien>();

    constructor(){

    }

    //Thêm nhân viên
    public ThemNv(nvNew: NhanVien){
        this.DanhSachNhanVien.push(nvNew);
    }
}