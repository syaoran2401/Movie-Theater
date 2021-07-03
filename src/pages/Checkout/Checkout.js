import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingSeatAction, bookTicketAction, getBookingTicketAction } from '../../redux/action/BookingTicketAction';
import style from './Checkout.module.css'
import './Checkout.css'
import { CloseOutlined, UserOutlined, CheckOutlined, SyncOutlined } from '@ant-design/icons';
import { BOOKING_CHAIR, CHANGE_TAB_ACTIVE } from '../../redux/types/TicketType';
import _ from 'lodash'
import { BookTicketInfo } from '../../_core/models/BookTicket';

import { Tabs, Pagination } from 'antd';
import { getUserInfo } from '../../redux/action/UserManagementAction';
import moment from 'moment';
import { connection } from '../..';




function Checkout(props) {


    const dispatch = useDispatch()
    const { userLoginInfo } = useSelector(state => state.UserManagementReducer);
    const { ticketInfo, danhSachGheDangDat, danhSachGheKhachDangDat } = useSelector(state => state.BookingTicketReducer);
    const { thongTinPhim, danhSachGhe } = ticketInfo
    console.log({ danhSachGheDangDat });
    let tongThanhTien = danhSachGheDangDat.reduce((tongTien, ghe, index) => {
        return tongTien += ghe.giaVe;
    }, 0).toLocaleString()

    const renderChair = () => {
        return danhSachGhe.map((chair, index) => {

            let classGheVip = chair.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = chair.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';

            // Kiểm tra từng render xem có phải ghế khách đặt hay ko
            let classGheKhachDangDat = '';
            let indexGheKDD = danhSachGheKhachDangDat.findIndex(gheKDD => gheKDD.maGhe === chair.maGhe);
            if (indexGheKDD !== -1) {
                classGheKhachDangDat = 'gheKhachDangDat';
            }


            // Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay ko
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === chair.maGhe);
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat';
            }

            let classGheDaDuocDat = '';
            if (userLoginInfo.taiKhoan === chair.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat'
            }

            return <Fragment key={index}>
                <button disabled={chair.daDat | classGheKhachDangDat !== ''} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDangDat} hover:text-center`} onClick={() => {
                    // load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)
                    const action = bookingSeatAction(chair, props.match.params.maLichChieu);
                    dispatch(action)
                }}>
                    {chair.daDat ? renderIconUserDatGhe(classGheDaDuocDat) : classGheKhachDangDat !== '' ? renderIconGheKhachDD() : chair.stt}
                </button>

                {(index + 1) % 15 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    const renderIconUserDatGhe = (classGheDaDuocDat) => {
        return classGheDaDuocDat !== '' ? <UserOutlined style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} /> : <CloseOutlined style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} />
    }

    const renderIconGheKhachDD = () => {
        return <SyncOutlined style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} />
    }

    useEffect(() => {
        // dispatch action 
        dispatch(getBookingTicketAction(props.match.params.maLichChieu));



        // Có 1 client nào thực hiện việc đặt vé thành công, mình sẽ load lại danh sách phòng vé của lịch chiếu đó
        connection.on('datVeThanhCong', () =>{
            dispatch(getBookingTicketAction(props.match.params.maLichChieu));

        })


        // vừa vào trang load tất cả ghế của các người khác đang đặt
        connection.invoke('loadDanhSachGhe', props.match.params.maLichChieu)


        // load danh sách ghế đang đặt từ server về (realTime)
        connection.on('loadDanhSachGheDaDat', (dsGheKhachDat) => {
            console.log('danhSachGheKhachDat', dsGheKhachDat)

            // Bước 1: loại mình ra khỏi danh sách hiển thị
            dsGheKhachDat = dsGheKhachDat.filter(item => item.taiKhoan !== userLoginInfo.taiKhoan);

            // Bước 2: gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung
            let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) =>{
                let arrGhe = JSON.parse(item.danhSachGhe);
                return [...result, ...arrGhe]
            },[]);

            // Đưa dư liệu ghế khách đặt cập nhật redux
            arrGheKhachDat = _.uniqBy(arrGheKhachDat, 'maGhe');

            // đưa dữ liệu về redux (bookingTicketReducer)
            dispatch({
                type:"DAT_GHE_REALTIME",
                arrGheKhachDat
            })

            console.log('arrGheKhachDat',arrGheKhachDat)
        })


        // Cài đặt sự kiện khi reload trang
        window.addEventListener("beforeunload",clearGhe);

        return () =>{
            clearGhe();
            window.removeEventListener('beforeunload',clearGhe)
        }

    }, []);

    const clearGhe = event =>{
        connection.invoke('huyDat', userLoginInfo.taiKhoan, props.match.params.maLichChieu);
    }

    return (
        <div className='min-h-screen' >
            <div className='grid grid-cols-12 '>
                <div className='col-span-9 mt-4'>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='bg-black' style={{ width: '80%', height: '10px' }}>
                        </div>
                        <div className={`${style["trapezoid"]} text-center `}>
                            <h3 className='mt-3 text-black'>Man Hinh</h3>
                        </div>
                        <div>
                            {renderChair()}
                        </div>
                    </div>

                    <div className='mt-5 flex justify-center text-center'>
                        <table className='divide-y divide-gray-200  w-2/3'>
                            <thead className='bg-gray-50 p-5'>
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế mình đặt</th>
                                    <th>Ghế khách đang đặt</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                                <tr>
                                    <td><button className='ghe text-center' style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} ><CheckOutlined /></button></td>
                                    <td><button className='ghe gheDangDat text-center' style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} ><CheckOutlined /></button></td>
                                    <td><button className='ghe gheDaDat text-center' style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} ><CheckOutlined /></button></td>
                                    <td><button className='ghe gheVip text-center' style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} ><CheckOutlined /></button></td>
                                    <td><button className='ghe gheDaDuocDat text-center' style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} ><CheckOutlined /></button></td>
                                    <td><button className='ghe gheKhachDangDat text-center' style={{ marginBottom: '7.5', fontWeight: 'bold', verticalAlign: '0.1rem' }} ><CheckOutlined /></button></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-span-3 mb-5 mt-4'>
                    <h3 className='text-green-400 text-center text-2xl'>{tongThanhTien} d</h3>
                    <hr />
                    <h1 className='text-3xl'>{thongTinPhim?.tenPhim}</h1>
                    <h5>{thongTinPhim?.diaChi}</h5>
                    <h5>Ngay Chieu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</h5>
                    <hr />
                    <div className='flex flex-row my-5'>
                        <div className='w-4/5'>
                            <span className='text-red-400 text-left font-bold text-xl'>Ghe</span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className='text-green-500 text-xl mx-2'>{gheDD.stt}</span>
                            })}
                        </div>
                        <div className='text-right col-span-1'>
                            <span className='text-green-800 text-lg font-bold'>
                                {tongThanhTien} d
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i>Email</i><br />
                        {userLoginInfo.email}
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i>Phone</i><br />
                        {userLoginInfo.soDT}
                    </div>
                    <hr />
                    <div className='mb-0 h-4/5 flex flex-col justify-around items-center'>
                        <div className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer' onClick={() => {
                            const bookTicketInfo = new BookTicketInfo();
                            bookTicketInfo.maLichChieu = props.match.params.maLichChieu;
                            bookTicketInfo.danhSachVe = danhSachGheDangDat;
                            console.log(bookTicketInfo);

                            dispatch(bookTicketAction(bookTicketInfo))
                        }}>
                            Confirm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// Tạo Component Tab Thanh Toán và Kết Quả Đặt Vé cho trang trên cùng 1 file
const { TabPane } = Tabs;
// function callback(key) {

// }

export default function Demo(props) {
    const dispatch = useDispatch()
    const { tabActive } = useSelector(state => state.BookingTicketReducer);
    return <div className='p-5'>
        <Tabs defaultActiveKey={'1'} activeKey={tabActive} onChange={(key) => {
            dispatch({
                type: CHANGE_TAB_ACTIVE,
                number: key
            })
        }}>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1" >
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2" >
                <KetQuaDatVe {...props} />
            </TabPane>

        </Tabs>
    </div>
}




// Component Kết Quả Đặt Vế
function KetQuaDatVe(props) {

    const dispatch = useDispatch()
    const { userInfo, userLoginInfo } = useSelector(state => state.UserManagementReducer)

    console.log({ userInfo });


    const renderTicketItem = () => {
        return userInfo.thongTinDatVe?.map((item, index) => {
            const seats = _.first(item.danhSachGhe);
            return <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.hinhAnh} alt={item.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/200/300' }} />
                    <div className="flex-grow">
                        <h2 className="title-font font-medium text-red-600 text-2xl">{item.tenPhim}</h2>
                        <p className="text-gray-500">Giờ Chiếu: {moment(item.ngayDat).format('hh:mm A')} - Ngày Chiếu: {moment(item.ngayDat).format('DD-MM-YYYY')}</p>
                        <p className='font-bold'>Địa điểm: {seats.tenHeThongRap}</p>
                        <p className='font-bold text-base'>Tên rạp: {seats.tenCumRap} - Ghế {renderListSeat(item)}</p>
                    </div>
                </div>
            </div>
        })
    }


    const renderListSeat = (ticket) => {
        return ticket.danhSachGhe.map((item, index) => {
            return <span key={index} className='text-lg mx-1 text-blue-300'>[{item.tenGhe}]</span>
        })
    }

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])



    return <div className='p-5'>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-purple-600">Lịch sử đặt vé khách hàng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa điểm về thời gian để xem phim vui vẻ bạn nhé</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderTicketItem()}
                </div>
            </div>
        </section>

    </div>
}