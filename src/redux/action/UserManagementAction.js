import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { GET_LIST_USER, LOGIN_ACTION, SET_USER_INFO } from "../types/UserTypes";
import { history } from '../../App'
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { notifyFunction } from "../../util/Settings/Notification/notificationMovie";
import { GROUPID_00 } from "../../util/Settings/config";


export const loginAction = (loginInfo) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.getUserLoginInfo(loginInfo);
            if (result.data.statusCode === 200) {
                console.log('result', result)
                dispatch({
                    type: LOGIN_ACTION,
                    userLoginInfo: result.data.content
                })

                history.push('/home')
            }
        } catch (err) {
            notifyFunction('error', 'Error Message', 'Username or passowrd is incorrect !')
            console.log(err.response.data)
        }
    }
}

export const registerAction = (userSignUpInfo) => {
    console.log('userSignUpInfo', userSignUpInfo)
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.registAccount(userSignUpInfo);
            if (result.data.statusCode === 200) {
                notifyFunction('success', 'Congratulations', 'Account signed up successfully !')
                history.push('/login')
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }
}

export const getUserInfoAction = () => {
    return async dispatch => {
        try {

            // dispatch(displayLoadingAction);
            const result = await quanLyNguoiDungService.getUserInfo();
            if (result.data.statusCode === 200) {
                console.log('result', result)
                dispatch({
                    type: SET_USER_INFO,
                    userInfo: result.data.content
                });
            }
            // dispatch(hideLoadingAction);
        } catch (err) {
            console.log(err.response?.data)
        }
        // dispatch(hideLoadingAction);
    }
}

export const updateUserInfoAction = (model) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.updateUserinfo(model);
            console.log(result)
            if (result.data.statusCode === 200) {
                dispatch(getUserInfoAction())
                notifyFunction('success', 'Congratulations', 'Account updated successfully !')
            }
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const getListUserAction = () =>{
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.getListUser(GROUPID_00);
            if(result.data.statusCode === 200){
                console.log(result);

                dispatch({
                    type:GET_LIST_USER,
                    listUser: result.data.content
                })
            }
        }catch (err) {
            console.log(err.response?.data)
        }
    }
}