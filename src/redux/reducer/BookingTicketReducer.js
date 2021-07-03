
import { ShowingTimeInfo } from "../../_core/models/TicketInfo"
import { BOOKING_CHAIR, BOOKING_COMPLETE, CHANGE_TAB, CHANGE_TAB_ACTIVE, SET_BOOKING_TICKET_INFO } from "../types/TicketType"

const initialState = {
    ticketInfo: new ShowingTimeInfo(),
    danhSachGheDangDat:[
        // {
        //     maGhe:48072,
        //     tenGhe: '32',
        //     maRap: 455,
        //     loaiGhe:'Thuong',
        //     stt:'32'
        // }
    ],
    tabActive: '1',
    danhSachGheKhachDangDat :[
        // {maGhe: 48041},
        // {maGhe: 48042},
    ]

}

const BookingTicketReducer =  (state = initialState, action) => {
    switch (action.type) {

    case SET_BOOKING_TICKET_INFO:{
        return { ...state, ticketInfo: action.ticketInfo}
    }

    case BOOKING_CHAIR:{
        // Cập nhật danh sách ghế
        let danhSachGheCapNhat = [...state.danhSachGheDangDat];
        let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
        if(index !== -1){
            // Nếu tìm thấy ghê dc chọn trong mảng có nghĩa là trc đó đã click vào rồi => xoá đi
            danhSachGheCapNhat.splice(index, 1)
        }else{
            danhSachGheCapNhat.push(action.gheDuocChon)
        }

        return {...state, danhSachGheDangDat: danhSachGheCapNhat}
    }

    case BOOKING_COMPLETE:{
        state.danhSachGheDangDat = [];
        return {...state}
    }

    case CHANGE_TAB:{
        state.tabActive = '2';
        return {...state}
    }

    case CHANGE_TAB_ACTIVE:{
        return {...state, tabActive: action.number}
    }

    case 'DAT_GHE_REALTIME':{
        state.danhSachGheKhachDangDat = action.arrGheKhachDat;
        return {...state}
    }

    default:
        return state
    }
}


export default BookingTicketReducer