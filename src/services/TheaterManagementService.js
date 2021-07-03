import { GROUP_ID_GP01 } from "../redux/types/TheaterType";
import { BaseService } from "./BaseService";


export class TheaterManagementService extends BaseService{
    // constructor(){
    //     super()
    // }

    // getListTheaterSystem  = () => {
    //     return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
    // }

    // getListTheater = (maHeThongRap) =>{
    //     return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    // }

    getListTheaterSystem = () =>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID_GP01}`)
    }
}


export const theaterManagementService = new TheaterManagementService()