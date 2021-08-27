import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from "../../../../redux/action/CarouselAction";
import './HomeCarousel.css';

const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};




export default function HomeCarousel(props) {
    const { arrBanner } = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch()


    useEffect(() => {
        //  const fetchData = async () =>{
        //     try{
        //         let res = await axios({
        //             url:`http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner`,
        //             method:'GET'
        //         })
        //         console.log(res);

        //         dispatch({
        //             type:'SET_CAROUSEL',
        //             arrBanner:res.data.content
        //         })
        //     }catch(err){
        //         console.log(err.response.data)
        //     }
        // }
        // fetchData()

        // const action = async (dispatch) => {
        //     try {
        //         let res = await axios({
        //             url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner`,
        //             method: 'GET'
        //         })
        //         console.log(res);

        //         dispatch({
        //             type: 'SET_CAROUSEL',
        //             arrBanner: res.data.content
        //         })
        //     } catch (err) {
        //         console.log(err.response.data)
        //     }
        // }
        // dispatch(action)

        dispatch(getCarouselAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderBannerImg = () => {
        return arrBanner.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className='w-full opacity-0' alt={item.hinhAnh} />
                </div>
            </div>
        })
    }
    return (
        <div className='customCarousel'>
            <Carousel effect="fade">
                {renderBannerImg()}
            </Carousel>
        </div>
    );
}
