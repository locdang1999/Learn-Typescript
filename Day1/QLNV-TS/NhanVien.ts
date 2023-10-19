export class NhanVien {
    public MaNV: number;
    public HoTen: string;
    public LuongCB: number;
    public LoaiNV: number;

    // Hàm khởi tạo
    constructor(maNV: number, hoTen: string, luongCB: number, loaiNV: number) {
        this.MaNV = maNV;
        this.HoTen = hoTen;
        this.LuongCB = luongCB;
        this.LoaiNV = loaiNV;
    }

    public tinhLuongNv(): number {
        let tongLuong: number = 0;
        switch (this.LoaiNV) {
            case 1: tongLuong = this.LuongCB;
                break;
            case 2: tongLuong = this.LuongCB * 1.5;
                break;
            case 3: tongLuong = this.LuongCB * 3;
                break;
            default: tongLuong = this.LuongCB;
                break;
        }
        return tongLuong;
    }

    public LayLoaiNv():string{
        let tongLuong: string = "";
        switch (this.LoaiNV) {
            case 1: tongLuong = "Nhân viên";
                break;
            case 2: tongLuong = "Quản lý";
                break;
            case 3: tongLuong = "Giám đốc";
                break;
            default: tongLuong = "Nhân viên";
                break;
        }
        return tongLuong;
    }
}