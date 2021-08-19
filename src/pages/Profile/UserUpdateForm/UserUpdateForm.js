import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik, ErrorMessage } from 'formik'
import "./userUpdateForm.css"
import { Form, Input, Select, Row, Col } from 'antd'
import * as Yup from "yup";
import { updateUserInfoAction } from '../../../redux/action/UserManagementAction'
import { useDispatch } from 'react-redux'

export default function UserUpdateform(props) {
    const { userInfo, setActive } = props

    const dispatch = useDispatch()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({

        enableReinitialize: true,
        initialValues: {
            taiKhoan: userInfo.taiKhoan,
            matKhau: userInfo.matKhau,
            hoTen: userInfo.hoTen,
            maNhom: userInfo.maNhom,
            soDT: userInfo.soDT,
            email: userInfo.email,
            maLoaiNguoiDung:"KhachHang"
        },

        validationSchema: Yup.object().shape({

            hoTen: Yup.string().required("Name can't be empty"),
            soDT: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is required"),
            maNhom: Yup.string().required('Group number is required'),
            email: Yup.string()
                .email('Invalid email')
                .required("Email can't be empty"),
            matKhau: Yup.string()
                .min(2, "Password can't be less than 2 characters")
                .max(15, "Password can't be more than 15 characters !")
                .required('Password field must be provided !'),
        }),



        onSubmit: values => {
            console.log('values', values);
            dispatch(updateUserInfoAction(values))
            setActive(false);
            // dispatch(loginAction(values))
        },
    });


    // const handleChange =(fieldName, values) =>{
    //     console.log(values)
    //     formik.setFieldValue(fieldName, values)
    // }



    return (
        <Fragment>
            <h1 className="subtopic">User Info</h1>
            <Form
                onSubmitCapture={formik.handleSubmit}
                className="mt-12"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
            >
                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} label="Account">
                    <Input disabled={false} className='inputField' name='taiKhoan' value={formik.values.taiKhoan} />
                </Form.Item>


                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} label="Password">
                    <Input className='inputField' name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} />
                    {formik.touched.matKhau && formik.errors.matKhau ? <div className='mt-3'>{formik.errors.matKhau}</div> : null}
                </Form.Item>




                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} label="Name">
                    <Input className='inputField' name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} />
                    {formik.touched.hoTen && formik.errors.hoTen ? <div className='mt-3'>{formik.errors.hoTen}</div> : null}
                </Form.Item>



                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} label="Phone">
                    <Input className='inputField' name='soDT' value={formik.values.soDT} onChange={formik.handleChange} />
                    {formik.touched.soDT && formik.errors.soDT ? <div className='mt-3'>{formik.errors.soDT}</div> : null}
                </Form.Item>




                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} label="Email">
                    <Input className='inputField' name='email' value={formik.values.email} onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? <div className='mt-3'>{formik.errors.email}</div> : null}
                </Form.Item>

                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} label="Group">
                    <Input className='inputField' name='maNhom' value={formik.values.maNhom} onChange={formik.handleChange} />
                    {formik.touched.maNhom && formik.errors.maNhom ? <div className='mt-3'>{formik.errors.maNhom}</div> : null}
                </Form.Item>



                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }} name='maLoaiNguoiDung' label="Type">
                    <select  className='inputField' style={{ textIndent: '40%' }} onChange={formik.handleChange} >
                        <option value="KhachHang">Guest</option>
                        <option value="QuanTri">Manager</option>
                    </select>
                </Form.Item>

                <div className='text-center '>
                    <button className='customButton'>Update</button>
                </div>

            </Form>

        </Fragment >
    )
}
