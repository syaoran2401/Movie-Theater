import { theaterManagementService } from "../../services/TheaterManagementService"
import { GET_LIST_THEATER_SYSTEM } from "../types/TheaterType";





export const getListTheaterSystemAction = () => {
    return async (dispatch) => {
        try {
            const {data, status} = await theaterManagementService.getListTheaterSystem()
            if(status === 200){
                dispatch({
                    type: GET_LIST_THEATER_SYSTEM,
                    arrTheaterSystem: data.content
                })
            }
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

