import React, { useEffect, useRef, useState } from 'react'
import { Button, Input, Select, Table } from 'antd';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, getListUserAction } from '../../../redux/action/UserManagementAction';
import { Fragment } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './user.css'
import { GROUPID_00 } from '../../../util/Settings/config';
import { SET_USER_INFO } from '../../../redux/types/UserTypes';








export default function Users() {

    const dispatch = useDispatch();


    const { listUser } = useSelector(state => state.UserManagementReducer);
    const searchRef = useRef(null);
    const [groupId, setGroupId] = useState(GROUPID_00);


    const data = listUser

    console.log("🚀 ~ file: Users.js ~ line 48 ~ Users ~ listUser", listUser);


    useEffect(() => {
        dispatch(getListUserAction(groupId));
    }, [groupId])


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
            width: '15%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '20%'
        },
        {
            title: 'Phone number',
            dataIndex: 'soDt',
            width: '15%'
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
            width: '15%'
        },
        {
            title: 'Password',
            dataIndex: 'matKhau',
            render: (text, record, index) => {
                return <p>***************</p>
            },
            width: '10%'
        },

        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record, index) => {
                return <Fragment>
                    <span
                        key={1}
                        className='text-2xl p-5'
                        style={{ color: 'blue', cursor: 'pointer' }}
                        onClick={() => {
                            dispatch({
                                type: SET_USER_INFO,
                                userInfo: record
                            })
                            history.push(`/admin/user/editUser/${groupId}/${record.taiKhoan}`)
                        }}
                    >
                        <EditOutlined />
                    </span>

                    <span className='text-2xl p-5'
                        key={2}
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${record.taiKhoan}? `)) {
                                dispatch(deleteUserAction(groupId, record.taiKhoan))
                            }
                        }}
                    >
                        <DeleteOutlined />
                    </span>

                </Fragment>
            },
            width: '20%'
        },
    ];

    const handleSearchChange = (e) => {
        console.log(e.target.value)
        if (!searchRef.current) {
            clearTimeout(searchRef.current)
        }

        searchRef.current = setTimeout(() => {
            dispatch(getListUserAction(groupId, e.target.value))
        }, 300)



    }


    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }


    const handleChange = (value) => {
        setGroupId(value)
    }


    const { Option } = Select;
    const option = ["GP00", "GP01", "GP02", "GP03", "GP04", "GP05"];
    const renderSelectOption = () => {
        return option.map((group, index) => {
            return <Option key={index} value={group}>{group}</Option>
        })
    }

    console.log(groupId)


    return (
        <div className='userManagement'>
            <h3 className='text-4xl text-bold text-center'>User Management {groupId}</h3>
            <div className='flex justify-between items-center'>
                <Button className='mb-5' onClick={() => {
                    dispatch({
                        type: SET_USER_INFO,
                        userInfo: ""
                    })
                    history.push(`/admin/user/addNewUser/${groupId}`)
                }}>Add New User +</Button>

                <div className='flex justify-center items-center'>
                    <p className='mb-0 text-lg mr-3'>Group type:</p>
                    <Select defaultValue={`${groupId}`} onChange={handleChange}>
                        {renderSelectOption()}
                    </Select>
                </div>
            </div>


            <Input
                placeholder="Search movie ..."
                style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}
                onChange={handleSearchChange}
            />

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'taiKhoan'} />
        </div>
    )
}
