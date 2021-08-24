import { GROUPID_00 } from "../util/Settings/config";
import { BaseService } from "./BaseService";

export class QuanLyNguoiDungService extends BaseService {

    getUserLoginInfo = (loginInfo) => {  // tai khoan, mat khau
        return this.post('api/QuanLyNguoiDung/DangNhap', loginInfo);
    }

    registAccount = (userSignUpInfo) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, userSignUpInfo)
    }

    getUserInfo = () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

    updateUserinfo = (model) => {
        return this.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', model)
    }

    getListUser = (groupId,keyword = "") => {
        if (keyword.trim() !== "") {
            return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupId}&tuKhoa=${keyword}`);
        }else{
            return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupId}`)
        }
    }


    getUserType = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }

    addUser = (userData) => {
        return this.post('api/QuanLyNguoiDung/ThemNguoiDung', userData)
    }

    deleteUser =(userName) =>{
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`)
    }

    editUserInfo = (model) => {
        return this.post('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', model)
    }


}


export const quanLyNguoiDungService = new QuanLyNguoiDungService()