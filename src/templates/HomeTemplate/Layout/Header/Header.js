import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from "lodash";
import { Fragment } from 'react';

const { Option } = Select;


export default function Header() {

    const { userLoginInfo } = useSelector(state => state.UserManagementReducer);


    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }


    const { t, i18n } = useTranslation();

    const renderLogin = () => {
        if (_.isEmpty(userLoginInfo)) {
            return <Fragment>
                <li className="flex relative navLink">
                    <NavLink to='/login' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t('SIGN IN.1')}</NavLink>
                </li>
                <li className="flex relative navLink">
                    <NavLink to='/register' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("REGISTER")}</NavLink>
                </li>
            </Fragment>
        }

        return <>
            <li className="flex relative navLink">
                <NavLink to='/profile' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">Hello: {userLoginInfo.taiKhoan}</NavLink>
            </li>
        </>
    }

    return (
        <div>
            <header className="p-4  bg-black text-white fixed w-full z-50 bg-opacity-50">
                <div className="container flex justify-between align-items-center h-16 mx-auto">
                    <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberLearn.vn" />
                    </NavLink>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex relative navLink">
                            <NavLink to='/home' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("HOME")}</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/contact' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("CONTACT")}</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/news' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("COMING MOVIE")}</NavLink>
                        </li>



                        {renderLogin()}
                        <Select defaultValue="en" style={{ width: 100 }} onChange={handleChange}>
                            <Option value="en">Eng</Option>
                            <Option value="chi">Chi</Option>
                            <Option value="vi">Vi</Option>
                        </Select>
                    </ul>
                </div>
            </header>

        </div>
    )
}
