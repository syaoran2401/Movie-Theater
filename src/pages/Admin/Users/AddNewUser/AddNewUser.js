import React, { useEffect } from 'react'
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useFormik } from 'formik';
import { addUserAction, editUserAction, getUserTypeAction } from '../../../../redux/action/UserManagementAction';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup'
import { LeftOutlined } from '@ant-design/icons'
import { history } from '../../../../App';

export default function AddNewUser(props) {

    const { groupID } = props.match.params


    const { userType, userInfo } = useSelector(state => state.UserManagementReducer);

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUserTypeAction());

    }, [])


    const nameReg = /^[a-z ,.'-]+$/i;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
        initialValues: {
            taiKhoan: userInfo.taiKhoan,
            matKhau: userInfo.matKhau,
            hoTen: userInfo.hoTen,
            email: userInfo.email,
            soDt: userInfo.soDt,
            maNhom: groupID,
            maLoaiNguoiDung: userInfo ? userInfo.maLoaiNguoiDung : 'KhachHang'
        },



        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required("Username can't be empty"),
            matKhau: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Password can't be empty"),
            hoTen: Yup.string().matches(nameReg, "Name can't be a number").required("Name can't be empty"),
            email: Yup.string().email('Invalid email').required("Email can't be empty"),
            soDt: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone number can't be empty'")

        }),

        onSubmit: values => {
            console.log(values)
            userInfo ? dispatch(editUserAction(values)) : dispatch(addUserAction(values))

        },
    });


    const { Option } = Select;

    const handleChange = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }

    const renderSelectOption = () => {
        return userType?.map((type, index) => {
            return <Option key={index} value={type.maLoaiNguoiDung}>{type.tenLoai}</Option>
        })
    }

    return (
        <div className='container mx-auto'>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                layout="horizontal"
                initialValues="large"
                size="large"
                onSubmitCapture={formik.handleSubmit}
            >
                <Row>
                    <Col flex='none'>
                        <div
                            className='flex justify-center items-center '
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                history.push('/admin/users')
                            }}
                        >
                            <LeftOutlined  />
                            <p className='text-xl mb-0 ml-3' >Back</p>

                        </div>
                    </Col>
                    <Col flex='auto'>
                        <h3 className='text-4xl text-bold text-center  mb-20'>{userInfo ? "Edit User" : "Add User"}</h3>
                    </Col>
                </Row>
                <Form.Item label="Username" >
                    <Input
                        value={formik.values.taiKhoan}
                        name="taiKhoan"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? <div className='mt-3 text-red-600'>{formik.errors.taiKhoan}</div> : null}
                </Form.Item>

                <Form.Item label="Password" >
                    <Input.Password
                        value={formik.values.matKhau}
                        name="matKhau"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.matKhau && formik.errors.matKhau ? <div className='mt-3 text-red-600'>{formik.errors.matKhau}</div> : null}
                </Form.Item>

                <Form.Item label="Full Name">
                    <Input
                        value={formik.values.hoTen}
                        name="hoTen"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.hoTen && formik.errors.hoTen ? <div className='mt-3 text-red-600'>{formik.errors.hoTen}</div> : null}
                </Form.Item>

                <Form.Item label="Email">
                    <Input
                        value={formik.values.email}
                        name="email"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='mt-3 text-red-600'>{formik.errors.email}</div> : null}
                </Form.Item>

                <Form.Item label="Phone number">
                    <Input
                        value={formik.values.soDt}
                        name="soDt"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.soDt && formik.errors.soDt ? <div className='mt-3 text-red-600'>{formik.errors.soDt}</div> : null}
                </Form.Item>

                <Form.Item label="Group ID" >
                    <Input
                        value={formik.values.maNhom}
                        name="maNhom"
                        onChange={formik.handleChange}
                        disabled={true}
                    />

                    {formik.touched.maNhom && formik.errors.maNhom ? <div className='mt-3 text-red-600'>{formik.errors.maNhom}</div> : null}
                </Form.Item>

                <Form.Item label="User type">
                    <Select defaultValue="KhachHang" value={formik.values.maLoaiNguoiDung} onChange={handleChange}>
                        {renderSelectOption()}
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        {userInfo ? 'Update' : 'Submit'}
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}
