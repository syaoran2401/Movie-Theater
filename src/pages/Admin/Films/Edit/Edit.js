import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
    Button,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {  getMovieInfoAction, updateMovieUploadAction } from '../../../../redux/action/MovieAction';
import { GROUPID_00 } from '../../../../util/Settings/config';
import { GROUP_ID_GP01 } from '../../../../redux/types/TheaterType';





const Edit = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState(null);
    const { movieInfo } = useSelector(state => state.MovieManagement)

    const dispatch = useDispatch();

 
    useEffect(() => {

        let { id } = props.match.params;

        dispatch(getMovieInfoAction(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: movieInfo.maPhim,
            tenPhim: movieInfo.tenPhim,
            trailer: movieInfo.trailer,
            moTa: movieInfo.moTa,
            ngayKhoiChieu: movieInfo.ngayKhoiChieu,
            dangChieu: movieInfo.dangChieu,
            sapChieu: movieInfo.sapChieu,
            hot: movieInfo.hot,
            danhGia: movieInfo.danhGia,
            maNhom: GROUP_ID_GP01,
            hinhAnh: null,
        },

        onSubmit: (values) => {
            values.maNhom = GROUPID_00
        
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    // formData.append("tenPhim", formik.values.tenPhim);
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name)
                    }

                }
            }


            dispatch(updateMovieUploadAction(formData))

        }
    })

    const handleChangeDatePicker = (value, date, dateString) => {
        formik.setFieldValue('ngayKhoiChieu', value)
    }


    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }


    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];

        if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/jpg") {
            await formik.setFieldValue('hinhAnh', file)
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }

        }
    }



    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 6,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3 className='text-4xl text-center'>Add New Movie</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Name Movie">
                    <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Desciption">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Release Data">
                    <DatePicker format={"DD/MM/YYYY"}
                        onChange={handleChangeDatePicker}
                        value={moment(formik.values.ngayKhoiChieu)} 
                        />
                </Form.Item>
                <Form.Item label="Showing">
                    <Switch onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Coming">
                    <Switch onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch onChange={handleChangeSwitch("hot")} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Rating">
                    <InputNumber
                        onChange={handleChangeInputNumber("danhGia")}
                        min={1}
                        max={10}
                        value={formik.values.danhGia}
                    />
                </Form.Item>
                <Form.Item label="Picture">
                    <input type="file"
                        onChange={handleChangeFile}
                        accept="image/png, image/jpeg, image/gif, image/jpg"
                    />
                    <img
                        style={{ width: 200, height: 150 }}
                        src={imgSrc === null ? movieInfo.hinhAnh : imgSrc} alt="..."
                    />
                </Form.Item>

                 
                <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
              
            </Form>
        </>
    );
};


export default Edit;