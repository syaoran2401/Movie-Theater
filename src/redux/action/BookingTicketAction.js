import { connection } from "../..";
import { bookingTickerManager } from "../../services/BookingTickerManager";
import { BookTicketInfo } from "../../_core/models/BookTicket";
import { BOOKING_CHAIR, BOOKING_COMPLETE, CHANGE_TAB, SET_BOOKING_TICKET_INFO } from "../types/TicketType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";


export const getBookingTicketAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await bookingTickerManager.getTicketInfo(maLichChieu);
            // console.log('result', result);
            if (result.status === 200) {
                dispatch({
                    type: SET_BOOKING_TICKET_INFO,
                    ticketInfo: result.data.content
                })
            }
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}



export const bookTicketAction = (thongTinDatVe = new BookTicketInfo()) => {
    return async (dispatch, getState) => {
        try {
            dispatch(displayLoadingAction);

             await bookingTickerManager.bookTicket(thongTinDatVe);
           

            // Đặt vé thành công, gọi API load lại phòng vế
            await dispatch(getBookingTicketAction(thongTinDatVe.maLichChieu));
            await dispatch({
                type: BOOKING_COMPLETE
            })

            await dispatch(hideLoadingAction);
            let userLogin = getState().UserManagementReducer.userLoginInfo
            connection.invoke('datGheThanhCong',userLogin.taiKhoan, thongTinDatVe.maLichChieu);
            await dispatch({
                type: CHANGE_TAB
            })


        } catch (err) {
            console.log(err.response?.data)
        }

        dispatch(hideLoadingAction)
    }
}


export const bookingSeatAction = (ghe, maLichChieu) => {
    return async (dispatch, getState) => {

        // đưa thông tin ghế lên reducer
        await dispatch({
            type: BOOKING_CHAIR,
            gheDuocChon: ghe
        })

        // call API về backend
        let danhSachGheDangDat = getState().BookingTicketReducer.danhSachGheDangDat;
        let taiKhoan = getState().UserManagementReducer.userLoginInfo.taiKhoan;
        // console.log({ danhSachGheDangDat });
        // console.log({ taiKhoan });
        // console.log('maLichChieu', maLichChieu);

        // biến mảng thành chuỗi (khớp với dạng data type của backend )
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat)


        // call API signalR
        connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, maLichChieu)

    }
}