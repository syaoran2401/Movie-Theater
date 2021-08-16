import { GROUPID_00 } from "../util/Settings/config";
import { BaseService } from "./BaseService";

export class QuanLyPhimService extends BaseService{

    getListBanner = () =>{
        return this.get('api/QuanLyPhim/LayDanhSachBanner');
    };

    getListMovie = () =>{
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID_00}`)
    };

    getMovieDetail = (maPhim) =>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    };

    getMovieInfo = (maPhim) =>{
        return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    };

    addMovieUploadImg = (formData)=>{
        return this.post("api/QuanLyPhim/ThemPhimUploadHinh",formData)
    };


    updateMovieUpload = (formData) =>{
        return this.post("api/QuanLyPhim/CapNhatPhimUpload", formData)
    };

    deleteMovie = (maPhim) =>{
        return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }
}


export const quanlyPhimService = new QuanLyPhimService()