import React, { Fragment } from 'react'
import { Tabs } from 'antd';
import './ShowTimesHome.css'
import moment from 'moment';
import { NavLink } from 'react-router-dom';

export default function ShowTimesHome(props) {


    const { arrTheaterSystem } = props;
    console.log('arrTheaterSystem', arrTheaterSystem)


    const { TabPane } = Tabs;




    const renderTheaterSystem = () => {
        return arrTheaterSystem.map((item, index) => {
            return <TabPane
                tab={<img className='rounded-none w-12 h-12' src={item.logo} alt={item.logo} />}
                key={index} >

                {/* List Theater */}
                <Tabs tabPosition='left'>
                    {renderListTheater(item.logo, item.lstCumRap)}
                </Tabs>
            </TabPane>
        })
    }

    const renderListTheater = (itemLogo, listCumRap) => {
        return listCumRap?.map((theater, index) => {
            return <TabPane
                tab={
                    <div className='flex justify-center items-center' onClick={() => { }}>
                        <img className='rounded-none w-12 h-12' src={itemLogo} alt={itemLogo} />
                        <div className='text-left ml-5'>
                            <p className='text-base mb-0'>{theater.tenCumRap}</p>
                            {theater.diaChi.length > 30 ? <p className='text-base mb-0'>{theater.diaChi.slice(0, 30)}...</p> : <p className='text-base mb-0'>{theater.diaChi}</p>}

                        </div>
                    </div>
                }
                key={index} >

                {/* List movie */}
                <div className='showTime-content'>
                    {/* {renderShowTime(maHeThongRap)} */}
                    {renderListMovie(theater.danhSachPhim, theater.diaChi)}
                </div>

            </TabPane>
        })
    }

    const renderListMovie = (listMovie, diaChi) => {
        return listMovie.map((film, index) => {
            return <Fragment key={index}>
                <div className='flex justify-start items-center h-40 ml-8 my-12'>
                    <div className='w-1/6 h-full'>
                        <img className='rounded-none w-full h-full ' src={film.hinhAnh} alt={film.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/200/300' }} />
                    </div>
                    <div className='w-4/5 h-full ml-4 pl-4' >
                        <div className='flex justify-start items-start text-left'>
                            {film.hot ? <p className='iconHot'>Hot</p> : <p className='p-5'></p>}
                            <h1 className='mb-0 mx-5 font-bold text-2xl tracking-wider text-green-700'>{film.tenPhim}</h1>
                        </div>
                        {diaChi.length > 20 ? <p className=' text-xl pl-16 mt-4'>{diaChi.slice(0, 20)}...</p> : { diaChi }}

                        {/* Show Time schedule */}
                        <div className='grid grid-cols-5 gap-2 pl-16'>
                            {renderShowTime(film.lstLichChieuTheoPhim, film.maPhim)}
                        </div>
                    </div>
                </div>
                <hr />
            </Fragment>
        })
    }

    const renderShowTime = (filmShowTime, maPhim) => {
        console.log(filmShowTime[0].maLichChieu)
        return filmShowTime.slice(0, 10).map((timeSchedule, index) => {
            return <NavLink key={index} className='buttonNavLink' to={`/checkout/${filmShowTime[0].maLichChieu}`}>
                {moment(timeSchedule.ngayChieuGioChieu).format('hh:mm A')}
            </NavLink>
        })
    }


    return (
        <div className="py-20">
            <p className='text-red-400 text-2xl mb-16 showTimes relative'>showtimes MOVIES</p>
            <Tabs tabPosition='left' className='showTime-frame'>
                {renderTheaterSystem()}
            </Tabs>
        </div>

    )
}
