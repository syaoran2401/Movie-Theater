import { GET_COMING_MOVIE, GET_LIST_MOVIE, GET_MOVIE_DETAIL, GET_SHOWING_MOVIE } from "../types/MovieType"

const initialState = {
    arrMovie: [
        {
            "maPhim": 1316,
            "tenPhim": "Ted 5",
            "biDanh": "ted-5",
            "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ted-5_gp03.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP03",
            "ngayKhoiChieu": "2021-04-02T22:44:54.95",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1316,
            "tenPhim": "Ted 5",
            "biDanh": "ted-5",
            "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ted-5_gp03.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP03",
            "ngayKhoiChieu": "2021-04-02T22:44:54.95",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    arrMovieDefaul:[],
    dangChieu: true,
    sapChieu: true,
    movieDetail:{}
}

const MovieManagement = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_MOVIE:
            const { arrMovie } = action;
            state.arrMovie  = arrMovie;
            state.arrMovieDefaul = state.arrMovie;
            return { ...state}

        case GET_SHOWING_MOVIE: {
        
            state.dangChieu = !state.dangChieu
            state.arrMovie = state.arrMovieDefaul.filter(movie => movie.dangChieu === state.dangChieu);
            console.log('dang chieu', state.arrMovie)
            return { ...state  }
        }

        case GET_COMING_MOVIE: {
          
            state.sapChieu = !state.sapChieu
            state.arrMovie = state.arrMovieDefaul.filter(movie => movie.sapChieu === state.sapChieu);
            console.log('sap chieu', state.arrMovie)
            return { ...state }
        }

        case GET_MOVIE_DETAIL:{
            return {...state, movieDetail: action.movieDetail}
        }


        default:
            return state
    }
}

export default MovieManagement
