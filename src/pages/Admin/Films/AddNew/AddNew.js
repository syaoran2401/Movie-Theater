import React, { useState } from 'react';
import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addMovieUploadImgAction } from '../../../../redux/action/MovieAction';
import { GROUP_ID_GP01 } from '../../../../redux/types/TheaterType';





const AddNew = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState(null);

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTo: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
          
        },

        onSubmit: (values) => {
           values.maNhom = GROUP_ID_GP01
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    // formData.append("tenPhim", formik.values.tenPhim);
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name)

                }
            }

            console.log('formik', formData.get("File"));
            dispatch(addMovieUploadImgAction(formData))
        
        }
    })

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format("DD/MM/YYYY")
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
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

    const handleChangeFile = (e) => {
        let file = e.target.files[0];

        if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/jpg") {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }

            formik.setFieldValue('hinhAnh', file)
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
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Add New Movie</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Name Movie">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Desciption">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Release Data">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="Showing">
                    <Switch onChange={handleChangeSwitch("dangChieu")} />
                </Form.Item>
                <Form.Item label="Coming">
                    <Switch onChange={handleChangeSwitch("sapChieu")} />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch onChange={handleChangeSwitch("hot")} />
                </Form.Item>
                <Form.Item label="Rating">
                    <InputNumber
                        onChange={handleChangeInputNumber("danhGia")}
                        min={1}
                        max={10}
                    />
                </Form.Item>
                <Form.Item label="Picture">
                    <input type="file"
                        onChange={handleChangeFile}
                        accept="image/png, image/jpeg, image/gif, image/jpg"
                    />
                    <img
                        style={{ width: 200, height: 150 }}
                        src={imgSrc} alt="..."
                    />
                </Form.Item>
                <Form.Item label="Action">
                    <button type="submit" className="bg-blue-300 text-white p-2">Add movie</button>
                </Form.Item>
            </Form>
        </>
    );
};


export default AddNew;