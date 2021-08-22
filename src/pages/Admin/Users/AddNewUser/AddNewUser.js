import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { Option } from 'antd/lib/mentions';

export default function AddNewUser(props) {

    return (
        <div className='container mx-auto'>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                layout="horizontal"
                initialValues="large"
                size="large"
            >
                <h3 className='text-4xl text-bold text-center  mb-20'>Add User</h3>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Full Name"
                    name="hoTen"
                    rules={[{ required: true, message: 'Please input your Full Name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone number"
                    name="soDt"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Group ID"
                    name="maNhom"
                    rules={[{ required: true, message: 'Please input your phone group ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="maLoaiNguoiDung" label="User type" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option"
                    >
                        <Option value="KhachHang">Guest</Option>
                        <Option value="QuanTri">Manager</Option>
                    </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
            </Form>

        </div>
            )
}
