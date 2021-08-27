
import { quanlyPhimService } from '../../services/QuanLyPhimService'
import { GET_LIST_MOVIE, GET_MOVIE_DETAIL, SET_MOVIE_INFO } from '../types/MovieType';
import { history } from '../../App'
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';
import { notifyFunction } from '../../util/Settings/Notification/notificationMovie';

export const getListMovieAction = (tenPhim = "") => {
  
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
            await dispatch(displayLoadingAction);
            await quanlyPhimService.addMovieUploadImg(formData);

            history.push('/admin/films');
            await dispatch(hideLoadingAction);
            notifyFunction('success', 'Congratulations', 'Create movie successfully !')


        } catch (err) {
            notifyFunction('error', 'Error Message', 'Create movie fail !')
            console.log(err.response.data)
        }

        dispatch(hideLoadingAction)
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
            await dispatch(displayLoadingAction);
            await quanlyPhimService.updateMovieUpload(formData);

            await dispatch(getListMovieAction());
            history.push('/admin/films');

            await dispatch(hideLoadingAction);
            notifyFunction('success', 'Congratulations', 'Update successfully !')

        } catch (err) {
            notifyFunction('error', 'Error Message', 'Update fail !')
            console.log(err.response?.data)
        }
    }
}



export const deleteMovieAction = formData => {
    return async (dispatch) => {
        try {
            await quanlyPhimService.deleteMovie(formData);



            dispatch(getListMovieAction())
            notifyFunction('success', ' ', 'Delete successfully !')

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}