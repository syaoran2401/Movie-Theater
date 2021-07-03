import { GROUPID_00 } from "../util/Settings/config";
import { BaseService } from "./BaseService";

export class QuanLyPhimService extends BaseService{

    getListBanner = () =>{
        return this.get('api/QuanLyPhim/LayDanhSachBanner');
    }

    getListMovie = () =>{
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID_00}`)
    }

    getMovieDetail = (maPhim) =>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}


export const quanlyPhimService = new QuanLyPhimService()