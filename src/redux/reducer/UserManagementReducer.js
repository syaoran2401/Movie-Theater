import { TOKEN, USER_LOGIN } from "../../util/Settings/config";
import { GET_LIST_USER, GET_USER_TYPE, LOGIN_ACTION, SET_USER_INFO } from "../types/UserTypes"


let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLoginInfo: user, // tai khoan
    userInfo : {},
    listUser: [],
    userType:[]
}

const UserManagementReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_ACTION:{
            const { userLoginInfo } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(userLoginInfo));
            localStorage.setItem(TOKEN, userLoginInfo.accessToken)
            return { ...state, userLoginInfo: userLoginInfo }
        }

        case SET_USER_INFO:{
            const {userInfo} = action;
            return {...state, userInfo:userInfo}
        }

        case GET_LIST_USER:{
            return {...state, listUser: action.listUser}
        }

        case GET_USER_TYPE:{
            return {...state, userType: action.userType}
        }


        default:
            return state
    }
}

export default UserManagementReducer

