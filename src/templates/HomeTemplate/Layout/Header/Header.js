import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { Button, Col, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from "lodash";
import { Fragment } from 'react';
import { TOKEN, USER_LOGIN } from '../../../../util/Settings/config';
import { history } from '../../../../App';
import Sider from 'antd/lib/layout/Sider';
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';

const { Option } = Select;
const { SubMenu } = Menu;



export default function Header() {

    const { userLoginInfo } = useSelector(state => state.UserManagementReducer);
    const [collapsed, setCollapsed] = useState(false)


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
            <li className="flex relative">
                <NavLink
                    to='/profile'
                    className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">Hello: {userLoginInfo.taiKhoan}</NavLink>
            </li>
            <li className="flex relative">
                <NavLink
                    to='/register'
                    className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-yellow-400 border-violet-600  font-bold hover:text-red-500"
                    onClick={() => {
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(TOKEN);
                        history.push('/home');
                        window.location.reload();
                    }}>{t("SIGN OUT")}</NavLink>
            </li>
        </>
    }



    return (
        <div>
            <header className={`p-4  bg-black text-white fixed w-full z-50 bg-opacity-50 ${collapsed ? "collapse" : ''}`}>
                <div className="flex justify-between align-items-center h-16 mx-auto relative">
                    <NavLink to="/" aria-label="Back to homepage"
                        className="flex items-center pl-5 ml-5">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberLearn.vn" />
                    </NavLink>


                    <div className={`absolute ${collapsed ? "collapsed__content block" : "hidden"}`}>
                        <ul>
                            <li className='relative navLink' >
                                <NavLink to='/home' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("HOME")}</NavLink>
                            </li>
                            <li className="flex relative navLink my-6">
                                <NavLink to='/contact' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("CONTACT")}</NavLink>
                            </li>

                            {renderLogin()}
                        </ul>
                    </div>
          
                        <div className='collapsed__icon flex mr-20'>
                            <UnorderedListOutlined className='text-3xl text-red-700' onClick={() => {
                                setCollapsed(!collapsed)
                            }} />
                        </div>

                   
                    <ul className="items-stretch hidden space-x-3 nav__menu">
                        <li className="flex relative navLink">
                            <NavLink to='/home' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("HOME")}</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/contact' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("CONTACT")}</NavLink>
                        </li>
                        {/* <li className="flex relative navLink">
                            <NavLink to='/news' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">{t("COMING MOVIE")}</NavLink>
                        </li> */}



                        {renderLogin()}

                        <Select
                            defaultValue="en"
                            style={{ width: 100, display: 'flex', alignItems: 'center' }}
                            onChange={handleChange}>
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
