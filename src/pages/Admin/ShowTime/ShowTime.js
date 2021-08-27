import React, { useEffect, useState } from 'react'
import { Form, Button, Select, DatePicker, InputNumber } from 'antd';
import { theaterManagementService } from '../../../services/TheaterManagementService';
import { useFormik } from 'formik';
import moment from 'moment';
import { bookingTickerManager } from '../../../services/BookingTickerManager';


// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };

export default function ShowTime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: "",
            giaVe: ""
        },

        onSubmit: async (values) => {
       
            try{
                const result = await bookingTickerManager.createShowtime(values);
                alert(result.data.content)
            }catch(err){
                console.log(err.response?.data);
            }
        }
    })


    const [state, setState] = useState({
        theaterSystem: [],
        theaterBrach: []
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            let result = await theaterManagementService.getTheaterSystemInfo();

            setState({
                ...state,
                theaterSystem: result.data.content
            })

        } catch (err) {
            console.log(err.response?.data)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const arrayTheaterSystem = () => {
        return state.theaterSystem?.map((theater, index) => {
            return { label: theater.tenHeThongRap, value: theater.maHeThongRap }
        })
    }


    const arrayTheaterBranch = () => {
        return state.theaterBrach?.map((branch, index) => {
            return { label: branch.tenCumRap, value: branch.maCumRap }
        })
    }


    const handleChangeTheaterSystem = async (value) => {
        try {
            let result = await theaterManagementService.getTheaterBranchInfo(value);

            setState({
                ...state,
                theaterBrach: result.data.content
            })

        } catch (err) {
            console.log(err.response?.data)
        }

    }



    const handleChangeTheaterBranch = (value) => {
        formik.setFieldValue('maRap', value)
    }


    const onOk = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format("DD/MM/YYYY hh:mm:ss"));
      
    }


    const onChangeShowtime = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format("DD/MM/YYYY hh:mm:ss"));
        
    }


    const onChangePrice = (value) => {
        formik.setFieldValue('giaVe', value)
    }

   

    let film ={}
    if(localStorage.getItem('filmParams')){
        film = JSON.parse(localStorage.getItem('filmParams'))
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center mb-20'>Create Showtimes - {props.match.params.tenphim}</h1>
            <img className="mx-auto my-10" src={film.hinhAnh} alt={film.hinhAnh} width={700} height={1000}/>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                onSubmitCapture={formik.handleSubmit}
            >
                <Form.Item label="Theater System">
                    <Select
                        options={arrayTheaterSystem()}
                        onChange={handleChangeTheaterSystem}
                        placeholder="Select theater system"
                    />
                </Form.Item>

                <Form.Item label="Theater Branch">
                    <Select
                        options={arrayTheaterBranch()}
                        onChange={handleChangeTheaterBranch}
                        placeholder="Select Theater Branch"
                    />
                </Form.Item>

                <Form.Item label="Show Time">
                    <DatePicker form={"DD/MM/YYY hh:mm:ss"} showTime onChange={onChangeShowtime} onOk={onOk} />
                </Form.Item>

                <Form.Item label="Ticket price">
                    <InputNumber  onChange={onChangePrice} />
                </Form.Item>

                <Form.Item label="Action">
                    <Button type="primary" htmlType="submit">
                        Create Showtime
                    </Button>
                </Form.Item>

            </Form >

        </div>
    )
}
