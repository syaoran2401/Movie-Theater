import { GROUP_ID_GP01 } from "../redux/types/TheaterType";
import { BaseService } from "./BaseService";

export class QuanLyPhimService extends BaseService{

    getListBanner = () =>{
        return this.get('api/QuanLyPhim/LayDanhSachBanner');
    };

    getListMovie = (tenPhim = "") =>{
        if(tenPhim.trim() !== ""){
            return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID_GP01}&tenPhim=${tenPhim}`)
            
        }
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID_GP01}`)
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