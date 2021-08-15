
import { quanlyPhimService } from '../../services/QuanLyPhimService'
import { GET_LIST_MOVIE, GET_MOVIE_DETAIL } from '../types/MovieType';

export const getListMovieAction = () =>{
    return async (dispatch) => {
        try{
            const res = await quanlyPhimService.getListMovie();
            dispatch({
                type:GET_LIST_MOVIE,
                arrMovie:res.data.content
            })
        }catch(err){
            console.log(err.response.data)
        }
    }
}


export const getMovieDetailAction = (maPhim) =>{
    return async (dispatch) =>{
        try{
            const {data} = await quanlyPhimService.getMovieDetail(maPhim);
            dispatch({
                type:GET_MOVIE_DETAIL,
                movieDetail: data.content
            })

        }catch(err){
            console.log(err.response.data)
        }
    }
}
