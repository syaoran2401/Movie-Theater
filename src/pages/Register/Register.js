import React from 'react'
import { NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup'
import { registerAction } from '../../redux/action/UserManagementAction';

function Register(props) {

    const {
        errors,
        handleChange,
        handleSubmit,
    } = props;



    return (
        <form className="lg:w-1/2  xl:max-w-screen-sm" onSubmit={handleSubmit}>
            <div className="py-8 bg-indigo-100 lg:bg-white flex justify-between lg:justify-between lg:px-12">
                <div className="cursor-pointer flex  items-center">
                    <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">CYBERLEARN</div>
                </div>
                <div className="mt-3 text-center">
                    <NavLink to="/home" className='text-gray-700  hover:text-gray-700'>Back to Home</NavLink>
                </div>

            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">

                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold">Register</h2>

                <div className="mt-12">
                    <div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Full Name:
                                </div>
                            </div>
                            <input
                                type="text"
                                name='hoTen'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter Your Name ...."
                                onChange={handleChange}
                            />
                            <span className="text-red-600">{errors.hoTen}</span>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Email Address:
                                </div>
                            </div>
                            <input
                                type="email"
                                name='email'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter your email address ..."
                                onChange={handleChange}
                            />
                            <span className="text-red-600">{errors.email}</span>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Phone Number:
                                </div>
                            </div>
                            <input
                                type="number"
                                name='soDt'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter your phone number ..."
                                onChange={handleChange}
                            />
                            <span className="text-red-600">{errors.soDt}</span>
                        </div>

                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Account:</div>
                            <input
                                name='taiKhoan'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter you account ...."
                                onChange={handleChange}
                            />
                            <span className="text-red-600">{errors.taiKhoan}</span>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password:
                                </div>
                            </div>
                            <input
                                type="password"
                                name='matKhau'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter your password ...."
                                onChange={handleChange}
                            />
                            <span className="text-red-600">{errors.matKhau}</span>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Confirm Password:
                                </div>
                            </div>
                            <input
                                type="password"
                                name='confirmPassword'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Retype your password ...."
                                onChange={handleChange}
                            />
                            <span className="text-red-600">{errors.confirmPassword}</span>
                        </div>

                        <div className="mt-10">
                            <button
                                type='submit'
                                htmltype='submit'
                                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                Sign Up
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )

}


const RegisterForm = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        confirmPassword: ""
    }),

    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string().required('Account field must be provided !'),
        soDt: Yup.string().required('A phone number must be provide !'),
        hoTen: Yup.string().required('Name field must be provide !'),
        email: Yup.string().email('Invalid email').required('Email field must be provided !'),
        confirmPassword: Yup.string().required('Please re-enter your password'),
        matKhau: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Password field must be provided !'),

    }),


    handleSubmit: (values, { props }) => {
        console.log(values)
        let valid = null;

        for (let key in values) {
            if (key === "matKhau") {
                console.log(values[key])
                if (values[key] === values.confirmPassword) {
                    valid = true
                } else {
                    valid = false
                }
            }
        }
        console.log("valid", valid)

        if (valid) {
            props.dispatch(registerAction(values))
        }
    },
})(Register)


export default connect()(RegisterForm)