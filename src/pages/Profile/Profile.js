import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAction } from '../../redux/action/UserManagementAction';
import BookingTicketHistory from './BookTicketHistory/BookingTicketHistory';
import './profile.css'
import { Row, Col } from 'antd'
import UserUpdateform from './UserUpdateForm/UserUpdateForm'



export default function Profile(props) {


    const [active, setActive] = useState({
        updateForm: false,
        bookTicketHistory: false
    })

    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.UserManagementReducer)


    useEffect(() => {
        dispatch(getUserInfoAction())
    }, [])


    return (

        <div>
            <Row className="profile">
            
                <Col span={`${(active.updateForm || active.bookTicketHistory) ? 7 : 7}`}>
                    <nav
                        className={`glass ${(active.updateForm || active.bookTicketHistory) ? "navActive" : ""}`}
                        style={{
                            left: `${(active.updateForm || active.bookTicketHistory) ? "30%" : "70%"}`,
                            transform: `${(active.updateForm || active.bookTicketHistory) ? "translateX(0%)" : "translateX(100%)"}`,
                            transition: "all .5s"
                        }}>
                        <img src="https://picsum.photos/200" alt="random pic" className="profilepic"></img>
                        <h1 className='text-3xl font-bold'>Hello {userInfo.hoTen}</h1>
                        <div className='mt-5 container'>
                            <p style={{ color: "green" }}>Your account info:</p>
                            <div className='mb-5'>
                                <p className='text-black' style={{ marginBottom: '0.5rem' }}>Username:</p>
                                <h5 className='text-gray-600'>{userInfo.taiKhoan}</h5>
                            </div>

                            <div className='mb-5'>
                                <p className='text-black' style={{ marginBottom: '0.5rem' }}>Name: </p>
                                <h5 className='text-gray-600'>{userInfo.hoTen}</h5>
                            </div>

                            <div className='mb-5'>
                                <p className='text-black' style={{ marginBottom: '0.5rem' }}>Email:</p>
                                <h5 className='text-gray-600'>{userInfo.email}</h5>
                            </div>

                            <div className='mb-5'>
                                <p className='text-black' style={{ marginBottom: '0.5rem' }}>Phone Number:</p>
                                <h5 className='text-gray-600'>{userInfo.soDT}</h5>
                            </div>

                        </div>
                        <ul>
                            <li
                                className={` ${active.updateForm ? "updateFormActive " : ""}`}
                                onClick={() => {
                                    let update = { ...active };
                                    update.updateForm = true;
                                    update.bookTicketHistory = false
                                    setActive(update);

                                }} style={{ cursor: 'pointer' }}>
                                Update User Info
                            </li>

                            <li
                                className={` ${active.bookTicketHistory ? "bookingHistoryActive " : ""}`}
                                onClick={() => {
                                    let update = { ...active };
                                    update.updateForm = false;
                                    update.bookTicketHistory = true
                                    setActive(update);


                                }} style={{ cursor: 'pointer' }}>
                                Ticket Booking History
                            </li>
                        </ul>
                    </nav>
                </Col>

               

                <Col span={`${(active.updateForm || active.bookTicketHistory) ? 17 : 0}`}>
                    <div className={`condiv  ${active.updateForm ? "activeUpdateForm " : ""}`}>
                        <UserUpdateform userInfo={userInfo} setActive={setActive} active={active} />
                    </div>
                    <div className={`condiv contact ${active.bookTicketHistory ? "activeBookTicketHistory" : ""}`}>
                        <BookingTicketHistory ticketInfo={userInfo.thongTinDatVe} setActive={setActive} active={active} />
                    </div>
                </Col>
            </Row>

        </div >
    )
}
