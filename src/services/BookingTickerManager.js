import { BookTicketInfo } from "../_core/models/BookTicket";
import { BaseService } from "./BaseService";

export class BookingTickerManager extends BaseService{

    getTicketInfo = (maLichChieu) =>{ 
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

    // Thông tin đặt vé
    bookTicket = (thongTinDatVe = new BookTicketInfo()) =>{
        return this.post(`api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }
}

export const bookingTickerManager = new BookingTickerManager()