import { BaseService } from "./BaseService";

export class QuanLyNguoiDungService extends BaseService{

    getUserLoginInfo = (loginInfo) =>{  // tai khoan, mat khau
        return this.post('api/QuanLyNguoiDung/DangNhap', loginInfo);
    }

    registAccount = (userSignUpInfo) =>{
        return this.post(`api/QuanLyNguoiDung/DangKy`, userSignUpInfo)
    }

    getUserInfo = () =>{
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()