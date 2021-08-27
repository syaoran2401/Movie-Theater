
import { quanlyPhimService } from '../../services/QuanLyPhimService';
import { SET_CAROUSEL } from '../types/CarouselType';



export const getCarouselAction = () =>{
    return async (dispatch) => {
        try {
            const res = await quanlyPhimService.getListBanner()
          
    
            dispatch({
                type: SET_CAROUSEL,
                arrBanner: res.data.content
            })
        } catch (err) {
            console.log(err.response.data)
        }
    
    }
}