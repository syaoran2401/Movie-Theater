
import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { GET_COMING_MOVIE, GET_SHOWING_MOVIE } from "../../redux/types/MovieType";
import MovieCard from "../Movie/MovieCard";
import './MultipleRow.css'
import styleSlick from './MultipleRowStick.module.css'
import { NavLink } from 'react-router-dom';


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}  ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block", color: 'black' }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", color: 'black' }}
            onClick={onClick}
        />
    );
}


const MultipleRowsSlick = ({ arrMovie }) => {


    const dispatch = useDispatch();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },

        ]
    };

    const renderListMovie = () => {
        return arrMovie.map((item, index) => {
            return <div key={index} className={`${styleSlick['width-item']} `} >
                {/* <Movie itemMovie={item} /> */}
                <MovieCard  itemMovie={item} />
                <NavLink to={`/movieDetail/${item.maPhim}`}>
                    <div className='flex items-center justify-around'>
                        <p className='text-lg text-yellow-300 text-left mt-4 mb-0 font-bold'>{item.tenPhim}</p>
                        <div className='bookingLink'>
                            <span>B</span>
                            <span>o</span>
                            <span>o</span>
                            <span>k</span>
                            <span> </span>
                            <span>T</span>
                            <span>i</span>
                            <span>c</span>
                            <span>k</span>
                            <span>e</span>
                            <span>t</span>
                        </div>
                    </div>
                </NavLink>
            </div>
        })
    }

    // const activeClassShowing = dangChieu === true ? 'activeMovie' : '';
    // const activeClassComing = sapChieu === true ? 'activeMovie' : '';


    return (
        <div>
            <div className='flex'>
                <div className={`text-red-400 tracking-widest activeMovie relative`}>
                    <button onClick={() => {
                        dispatch({
                            type: GET_SHOWING_MOVIE,
                        })
                    }}>Showing MOVIES</button>
                </div>
                <div className='text-red-400 tracking-widest activeMovie relative ml-10'>
                    <button onClick={() => {
                        dispatch({
                            type: GET_COMING_MOVIE,
                        })
                    }}>Coming MOVIES</button>
                </div>
            </div>

            <Slider {...settings}>
                {renderListMovie()}
            </Slider>
        </div>
    );
}


export default MultipleRowsSlick