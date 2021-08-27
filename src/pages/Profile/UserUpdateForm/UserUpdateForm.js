import React, { Fragment, useState } from 'react'
import { useFormik } from 'formik'
import "./userUpdateForm.css"
import { Form, Input, Row, Col } from 'antd'
import * as Yup from "yup";
import { updateUserInfoAction } from '../../../redux/action/UserManagementAction'
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { CloseOutlined } from '@ant-design/icons'
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem } from '../../../components/StyleComponent/StyleComponent';

export default function UserUpdateform(props) {
    const { userInfo, active, setActive } = props

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const dispatch = useDispatch();

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
            maLoaiNguoiDung: "KhachHang"
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

            dispatch(updateUserInfoAction(values))
            let updateActive = { ...active }
            updateActive.updateForm = false;
            updateActive.bookTicketHistory = false
            setActive(updateActive);

        },
    });




    const toggling = () => setIsOpen(!isOpen);


    const onOptionClicked = value => () => {
        let convertValue = ""
        if (value === "Guest") {
            convertValue = "KhachHang"
        } else {
            convertValue = "QuanTri"
        }
        formik.setFieldValue('maLoaiNguoiDung', convertValue)
        setSelectedOption(value);
        setIsOpen(false);

    };

    const options = ["Guest", "Manager"];


    return (
        <Fragment>

            <Row>
                <Col flex="auto">
                    <h1 className="subtopic">User Info</h1>
                </Col>
                <Col flex="none">
                    <div
                        style={{ cursor: 'pointer' }}
                        className='m-5 text-xl'
                        onClick={() => {
                            let updateActive = { ...active }
                            updateActive.updateForm = false;
                            updateActive.bookTicketHistory = false
                            setActive(updateActive);
                        }}><CloseOutlined /></div>
                </Col>
            </Row>

            <Form
                onSubmitCapture={formik.handleSubmit}
                className="mt-12"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
            >
                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} label="Username">
                    <Input disabled={true} className='inputField' name='taiKhoan' value={formik.values.taiKhoan} />
                </Form.Item>


                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} label="Password">
                    <Input className='inputField' name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} />
                    {formik.touched.matKhau && formik.errors.matKhau ? <div className='mt-3'>{formik.errors.matKhau}</div> : null}
                </Form.Item>


                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} label="Name">
                    <Input className='inputField' name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} />
                    {formik.touched.hoTen && formik.errors.hoTen ? <div className='mt-3'>{formik.errors.hoTen}</div> : null}
                </Form.Item>



                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} label="Phone">
                    <Input className='inputField' name='soDT' value={formik.values.soDT} onChange={formik.handleChange} />
                    {formik.touched.soDT && formik.errors.soDT ? <div className='mt-3'>{formik.errors.soDT}</div> : null}
                </Form.Item>




                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} label="Email">
                    <Input className='inputField' name='email' value={formik.values.email} onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? <div className='mt-3'>{formik.errors.email}</div> : null}
                </Form.Item>

                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} label="Group">
                    <Input className='inputField' name='maNhom' value={formik.values.maNhom} onChange={formik.handleChange} />
                    {formik.touched.maNhom && formik.errors.maNhom ? <div className='mt-3'>{formik.errors.maNhom}</div> : null}
                </Form.Item>



                <Form.Item style={{ display: 'flex', alignItems: 'center', marginBottom: 'rem', textAlign: 'center' }} name='maLoaiNguoiDung' label="Type">
                    <DropDownContainer>


                        <DropDownHeader onClick={toggling}>
                            <Row>
                                <Col flex="auto"> {selectedOption || "Guest"}</Col>
                                <Col flex="none">
                                    <span className='mr-4'>
                                        v
                                    </span>
                                </Col>
                            </Row>
                        </DropDownHeader>

                        {isOpen && (
                            <DropDownListContainer>
                                <DropDownList >
                                    {options.map(option => (
                                        <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                            {option}
                                        </ListItem>
                                    ))}
                                </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>
                </Form.Item>


                <div className='text-center my-12'>
                    <button className='customButton'>Update</button>
                </div>

            </Form>

        </Fragment >
    )
}

// const DropDownContainer = styled("div")`
//   margin: 0 auto;
//   width:80%
// `;

// const DropDownHeader = styled("div")`
//     position: relative;
//     background: rgba(255, 255, 255, 0.15);
//     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) ;
//     border-radius: 2rem  !important;
//     width: 100%  !important;
//     height: 3rem  !important;
//     padding: 1rem  !important;
//     border: none  !important;
//     outline: none  !important;
//     color: #3c354e  !important;
//     font-size: 1rem  !important;
//     font-weight: bold  !important;
//     text-align: center!important;
// `;

// const DropDownListContainer = styled("div")`
//     position: absolute;
//     width: 80%;
//     z-index: 99999999;

// `;

// const DropDownList = styled("ul")`
//   padding: 0;
//   margin: 0;
//   padding-bottom:0.1rem;
//   background: #A57CB7;
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) ;
//   box-sizing: border-box;
//   color: #3c354e ;
//   font-size: 1rem ;
//   font-weight: 500;
//   cursor: pointer;
//   &:first-child {
//     padding-top: 0.8em;
//   }
 
// `;

// const ListItem = styled("li")`
//   width:90%;
//   list-style: none;
//   margin:0 auto 10px;

//   &:hover{
//     background: rgba(255, 255, 255, 0.15) 
//   }
// `;
