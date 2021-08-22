import React, { useEffect } from 'react'
import { Button, Input, Table } from 'antd';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getListUserAction } from '../../../redux/action/UserManagementAction';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import './user.css'






export default function Users() {

    const dispatch = useDispatch();


    const { listUser } = useSelector(state => state.UserManagementReducer);

    const data = listUser

    console.log("🚀 ~ file: Users.js ~ line 48 ~ Users ~ listUser", listUser);

    useEffect(() => {
        dispatch(getListUserAction())
    }, [])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'hoTen',
            sorter: {
                compare: (a, b) => {
                    let nameA = a.hoTen.toLowerCase().trim();
                    let nameB = b.hoTen.toLowerCase().trim();
                    if (nameA > nameB) {
                        return 1
                    }

                    return -1
                },
            },
            sortDirections: ['descend', 'ascend'],
            width:'15%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width:'20%'
        },
        {
            title: 'Phone number',
            dataIndex: 'soDt',
            width:'15%'
        },
        {
            title: 'User name',
            dataIndex: 'taiKhoan',
            sorter: {
                compare: (a, b) => {
                    let accountA = a.taiKhoan.toLowerCase().trim();
                    let accountB = b.taiKhoan.toLowerCase().trim();
                    if (accountA > accountB) {
                        return 1
                    }

                    return -1
                },
            },
            sortDirections: ['descend', 'ascend'],
            width:'15%'
        },
        {
            title: 'Password',
            dataIndex: 'matKhau',
            render: (text, record, index) => {
                console.log('record', record);
                return <p>***************</p>
            },
            width:'10%'
        },

        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record, index) => {
                return <Fragment>
                    <NavLink
                        key={1}
                        className='text-2xl p-5' to={``}
                        style={{ color: 'blue' }}
                        onClick={() =>{
                            
                        }}
                    >
                        <EditOutlined />
                    </NavLink>

                    <span className='text-2xl p-5'
                        key={2}
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => {
                            // if (window.confirm(`Are you sure you want to delete ${film.tenPhim}? `)) {
                            //     //call delelte api
                            //     dispatch(deleteMovieAction(film.maPhim))
                            // }
                        }}
                    >
                        <DeleteOutlined />
                    </span>

                    <NavLink
                        key={3}
                        className='text-2xl p-5' to={``}
                        style={{ color: 'green' }}
                    // onClick={() =>{
                    //     localStorage.setItem("filmParams", JSON.stringify(film))
                    // }}
                    >
                        <CalendarOutlined />
                    </NavLink>
                </Fragment>
            },
            width:'20%'
        },
    ];

    const handleSearchChange = (v) => {
        console.log(v)
    }


    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }


    return (
        <div className='userManagement'>
            <h3 className='text-4xl text-bold text-center'>User Management</h3>
            <Button className='mb-5' onClick={() => {
                history.push('/admin/films/addNewUser')
            }}>Add New User +</Button>
            <Input
                placeholder="Search movie ..."
                style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}
                onChange={handleSearchChange}
            />

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'taiKhoan'}/>
        </div>
    )
}
