import { SET_CAROUSEL } from "../types/CarouselType"

const initialState = {
    arrBanner: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        },
    ]
}

const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAROUSEL:
            return { ...state,arrBanner: action.arrBanner }

        default:
            return state
    }
}


export default CarouselReducer