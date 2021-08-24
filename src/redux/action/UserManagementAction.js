import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { GET_LIST_USER, GET_USER_TYPE, LOGIN_ACTION, SET_USER_INFO } from "../types/UserTypes";
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

// profile update user
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


export const getListUserAction = (groupId, keyword = "") => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);
            const result = await quanLyNguoiDungService.getListUser(groupId, keyword);
            if (result.data.statusCode === 200) {

                await dispatch(displayLoadingAction);
                await dispatch({
                    type: GET_LIST_USER,
                    listUser: result.data.content
                })
            }
            dispatch(hideLoadingAction);
        } catch (err) {
            console.log(err.response?.data)
        }
        dispatch(hideLoadingAction);
    }
}

export const getUserTypeAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.getUserType();
            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_USER_TYPE,
                    userType: result.data.content
                })
            }
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const addUserAction = (userData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.addUser(userData);
            if (result.data.statusCode === 200) {
                dispatch(getListUserAction())
                notifyFunction('success', "Congrat !", "Add user successfully !");
                history.push('/admin/users');
            }

        } catch (err) {
            console.log(err.response?.data)
            notifyFunction('Error', "Error Message", "Add user fail !");
        }
    }
}


export const deleteUserAction = (groupId, userName) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.deleteUser(userName);
            if (result.data.statusCode === 200) {
                notifyFunction('success', " ", "Delete user successfully !");
                dispatch(getListUserAction(groupId))
            }
        } catch (err) {
            notifyFunction('Error', "Error Message", "Delete user fail !");
            console.log(err.response?.data)
        }
    }
}


// admin update user
export const editUserAction = (userData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.editUserInfo(userData);
            if (result.data.statusCode === 200) {
                notifyFunction('success', " ", "Edit user successfully !");
                history.push('/admin/users');
            }
        } catch (err) {
            notifyFunction('Error', "Error Message", "Edit user fail !");
            console.log(err.response?.data)
        }
    }
}