import React, { useEffect } from 'react'
import ShowTimesHome from './ShowTimesHome/ShowTimesHome'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getListMovieAction } from '../../redux/action/MovieAction';
import MultipleRowsSlick from '../../components/RSlick/MultipleRowSlick';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import { getListTheaterSystemAction } from '../../redux/action/TheaterManagementAction';


export default function Home(props) {

    const { arrMovie } = useSelector(state => state.MovieManagement);
    const {arrTheaterSystem} = useSelector(state =>state.TheaterManagementReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMovieAction());
        dispatch(getListTheaterSystemAction())
    }, [])



    return (
        <div>
            <HomeCarousel/>
            
            <div className='home-contain w-100 m-0'>
                <section className="text-gray-600 body-font">
                    <div className="w-3/4 px-14 py-24 mx-auto">

                        {/* Using lib React Slick */}
                        <MultipleRowsSlick arrMovie={arrMovie}/>
                    </div>
                </section>
            </div>
            <div className='container mx-auto'>
                <ShowTimesHome arrTheaterSystem={arrTheaterSystem} />
            </div>
        </div>
    )
}
