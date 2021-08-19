import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAction } from '../../redux/action/UserManagementAction';
import './profile.css'
import UserUpdateform from './UserUpdateForm/UserUpdateForm'



export default function Profile(props) {

    const [state, setState] = useState({
        navItemActive: ''
    })


    // const [positionX, setPositionX] = useState("40%");
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.UserManagementReducer)
    console.log("🚀 ~ file: Profile.js ~ line 24 ~ Profile ~ userInfo", userInfo)

    useEffect(() => {
        dispatch(getUserInfoAction())
    }, [])


    return (

        <div className="profile">
            <nav className={`glass ${active ? "navActive" : ""}`} style={{ left: `40%` }}>
                <img src="https://picsum.photos/200" className="profilepic"></img>
                <h2>Hello {userInfo.hoTen}</h2>
                <div className='mt-10 container'>
                    <p style={{ color: "green" }}>Your account info:</p>
                    <div className='mb-7'>
                        <p className='text-black' style={{ marginBottom: '0.5rem' }}>Account:</p>
                        <p className='text-gray-600'>{userInfo.taiKhoan}</p>
                    </div>

                    <div className='mb-7'>
                        <p className='text-black' style={{ marginBottom: '0.5rem' }}>Name: </p>
                        <p className='text-gray-600'>{userInfo.hoTen}</p>
                    </div>

                    <div className='mb-7'>
                        <p className='text-black' style={{ marginBottom: '0.5rem' }}>Email:</p>
                        <p className='text-gray-600'>{userInfo.email}</p>
                    </div>

                    <div className='mb-7'>
                        <p className='text-black' style={{ marginBottom: '0.5rem' }}>Phone Number:</p>
                        <p className='text-gray-600'>{userInfo.soDT}</p>
                    </div>

                </div>
                <ul>
                    <li onClick={() => {
                        setActive(!active)
                    }} style={{ cursor: 'pointer' }}>
                        Update User Info
                    </li>
                    <li onClick={() => {
                        setActive(!active)
                    }} style={{ cursor: 'pointer' }}>
                        bookingHistory
                    </li>
                </ul>

            </nav>
            <div className={`condiv contact ${active ? "activeCondiv" : "condiv"}`}>
                <UserUpdateform userInfo={userInfo} setActive={setActive} />
            </div>
        </div >
    )
}
