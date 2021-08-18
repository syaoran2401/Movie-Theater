
import { quanlyPhimService } from '../../services/QuanLyPhimService'
import { GET_LIST_MOVIE, GET_MOVIE_DETAIL, SET_MOVIE_INFO } from '../types/MovieType';
import { history } from '../../App'

export const getListMovieAction = (tenPhim = "") => {
    console.log(tenPhim)
    return async (dispatch) => {
        try {
            const res = await quanlyPhimService.getListMovie(tenPhim);
            dispatch({
                type: GET_LIST_MOVIE,
                arrMovie: res.data.content
            })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}


export const getMovieDetailAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const { data } = await quanlyPhimService.getMovieDetail(maPhim);
            dispatch({
                type: GET_MOVIE_DETAIL,
                movieDetail: data.content
            })

        } catch (err) {
            console.log(err.response.data)
        }
    }
}


export const addMovieUploadImgAction = formData => {
    return async (dispatch) => {
        try {
            let result = await quanlyPhimService.addMovieUploadImg(formData);
            alert('Add successfully')
            console.log('res', result);



        } catch (err) {
            console.log(err.response.data)
        }
    }
}


export const getMovieInfoAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanlyPhimService.getMovieInfo(maPhim);

            dispatch({
                type: SET_MOVIE_INFO,
                movieInfo: result.data.content
            })

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const updateMovieUploadAction = formData => {
    return async (dispatch) => {
        try {
            let result = await quanlyPhimService.updateMovieUpload(formData);
            alert('update successfully');
            console.log('res', result);

            dispatch(getListMovieAction());
            history.push('/admin/films');

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}



export const deleteMovieAction = formData => {
    return async (dispatch) => {
        try {
            let result = await quanlyPhimService.deleteMovie(formData);
            alert('Delete successfully')
            console.log('res', result);

            dispatch(getListMovieAction())

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}