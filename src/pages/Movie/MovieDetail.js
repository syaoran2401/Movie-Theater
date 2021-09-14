
import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailAction } from '../../redux/action/MovieAction';
import './movieDetail.css'
import { Tabs, Rate } from 'antd';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;

export default function MovieDetail(props) {


    const dispatch = useDispatch()
    const { movieDetail } = useSelector(state => state.MovieManagement);
    const { maPhim } = props.match.params;


    useEffect(() => {
        dispatch(getMovieDetailAction(maPhim));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    let thoiGianChieu = moment(new Date(movieDetail.ngayKhoiChieu)).format("MMMM DD,YYYY");

    // Hệ Thống Rap
    const renderTheatherSystem = () => {
        return movieDetail.heThongRapChieu?.map((item, index) => {
            return <TabPane tab={
                <div className='flex items-center justify-center'>
                    <img src={item.logo} alt={item.logo} className='w-16 h-16' />
                    <p className='text-xl ml-4 mb-0'>{item.tenHeThongRap}</p>
                </div>
            } key={index} className='relative'>
                <div className='flex justify-around items-center w-3/5 mb-14'>
                </div>
                {renderShowTimeDetail(item.cumRapChieu)}
            </TabPane>

        })
    }

    const renderShowTimeDetail = (cumRapChieu) => {
        return cumRapChieu?.map((item, index) => {
            return <div key={index}>
                <div className='flex items-center justify-start my-2 ml-6'>
                    <img src={item.hinhAnh} alt={item.hinhAnh} className='w-16 h-16' />
                    <div className='ml-4'>
                        <p className='font-bold text-2xl mb-0'>{item.tenCumRap}</p>
                        <p className='text-gray-400 text-xl'>{item.diaChi}</p>
                    </div>
                </div>

                {/* Thoi Gian Chieu */}
                <div className='grid grid-cols-5'>
                    {item.lichChieuPhim?.slice(0, 10).map((lichChieu, index) => {
                        // let gioChieu = lichChieu.ngayChieuGioChieu.substr(11, 5);
                        let gioChieu = moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')
                        return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='mb-8'>
                            <div className='mx-5 buttonNavLink'>{gioChieu}</div>
                        </NavLink>
                    })
                    }
                </div>

            </div>
        })
    }


    return (
        <div>
            <div style={{ backgroundImage: `url(${movieDetail.hinhAnh})`, minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <CustomCard
                    style={{ paddingTop: 300, minHeight: '100vh' }}
                    effectColor="#C780FF" // required
                    color="#14AEFF" // default color is white
                    blur={10} // default blur value is 10px
                    borderRadius={0} // default border radius value is 10px
                >
                    <div className='xs:grid-cols-none  grid lg:grid-cols-12  container mx-auto'>
                        <div className='lg:col-span-12 xl:col-span-10  pb-10'>
                            <div className='xs:grid-cols-none  grid lg:grid-cols-2'>
                                <img src={movieDetail.hinhAnh} alt={movieDetail.hinhAnh} className='w-full h-full' />
                                <div className=' text-white ml-5 my-7'>
                                    <p className='text-sm'>Show date: <span>{thoiGianChieu}</span></p>
                                    <p className='text-5xl'>{movieDetail.tenPhim}</p>
                                    <div>
                                        <p className='text-lg my-10'>{movieDetail.moTa}</p>
                                    </div>
                                    <div className="text-lg flex justify-items-center items-center">
                                        <p className=" text-lg mb-0 mr-4">Status:</p>
                                        {movieDetail.danhChieu ? <div>Now showing</div> : <div>Coming Soon</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xs:hidden xl:block xl:col-span-2 mx-auto my-auto text-center'>
                            <div className={`c100 p${movieDetail.danhGia * 10} big green`} style={{ margin: '0 auto' }}>
                                <span className='text-white'>{movieDetail.danhGia * 10}%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <div className='text-green-400 text-2xl'><Rate allowHalf value={movieDetail.danhGia / 2} /></div>
                        </div>
                    </div>

                    {/* Tab Cum Rap và Lich Chieu */}
                    <div className='mt-6 ml-72 w-2/3 container bg-white px-5 py-5' style={{ height: '800px' }}>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="Lich chieu" key="1">
                                <div >
                                    <Tabs tabPosition='left'>
                                        {renderTheatherSystem()}
                                    </Tabs>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </CustomCard>
            </div>



        </div>

    )
}
