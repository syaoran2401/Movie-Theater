import { TOKEN, USER_LOGIN } from "../../util/Settings/config";
import { LOGIN_ACTION, SET_USER_INFO } from "../types/UserTypes"


let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLoginInfo: user, // tai khoan
    userInfo : {},

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


        default:
            return state
    }
}

export default UserManagementReducer