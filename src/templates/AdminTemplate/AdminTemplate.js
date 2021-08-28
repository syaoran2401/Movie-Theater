import React, { Fragment, useEffect, useState } from 'react'
import _ from 'lodash'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    FileAddOutlined,
    FileOutlined
} from '@ant-design/icons';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { history } from '../../App';
import { TOKEN, USER_LOGIN } from '../../util/Settings/config';
import { useSelector } from 'react-redux';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
export default function AdminTemplate(props) {


    const { Component, ...resProps } = props
    const [collapsed, setCollapsed] = useState(false)

    const { userLoginInfo } = useSelector(state => state.UserManagementReducer);

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    const onCollapse = collapsed => {
       
        setCollapsed(collapsed);
    };

    if (!localStorage.getItem(USER_LOGIN)) {
        alert("You don't have authorization to view this page");
        return <Redirect to='/' />
    }


    if(userLoginInfo.maLoaiNguoiDung !== "QuanTri"){
        alert("You don't have authorization to view this page");
        return <Redirect to='/'/>
    }


    const operations = <Fragment>
        {!_.isEmpty(userLoginInfo) ?
            <div className='flex justify-end'>
                <button
                    style={{ fontSize: '1.2rem', color: 'white' }}
                    className='flex  items-center'
                    onClick={() => {
                        history.push('/profile')
                    }}>
                    <div
                        style={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', color: 'black' }}
                        className='rounded-full bg-red-200 mx-auto mr-4'>
                        {userLoginInfo.taiKhoan.substr(0, 1)}
                    </div>
                    Hello! {userLoginInfo.taiKhoan}
                </button>
                <button
                    style={{ fontSize: '1rem', color: 'white', marginLeft: '2rem' }}
                    onClick={() => {
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(TOKEN);
                        history.push('/home');
                        window.location.reload();
                    }}>Sign Out</button>
            </div>
            :
            ""}
    </Fragment>




    return (
        <Route {...resProps} render={(propsRoute) => {
            return <>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="logo p-5">
                            <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="" />
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink to="/admin/users">Users</NavLink>
                            </Menu.Item>

                                <Menu.Item key="10" icon={<FileOutlined />}>
                                    <NavLink to="/admin/films">Films</NavLink>
                                </Menu.Item>
                            {/* <SubMenu key="sub1" icon={<FileOutlined />} title="Films">

                                <Menu.Item key="11" icon={<FileAddOutlined />}>
                                    <NavLink to="/admin/films/addnew">Add New Movie</NavLink>
                                </Menu.Item>
                            </SubMenu> */}

                            {/* <Menu.Item key="3" icon={<HistoryOutlined />}>
                                <NavLink to="/admin/showtimes">Showtime</NavLink>
                            </Menu.Item> */}

                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <div className='text-right pr-10 pt-1'>{operations}</div>
                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Component {...propsRoute} />
                            </div>
                        </Content>
                        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                    </Layout>
                </Layout>
            </>

        }} >
        </Route>
    )



}
