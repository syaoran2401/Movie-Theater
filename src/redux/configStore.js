import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import BookingTicketReducer from './reducer/BookingTicketReducer';
import CarouselReducer from './reducer/CarouselReducer';
import LoadingReducer from './reducer/LoadingReducer';
import MovieManagement from './reducer/MovieManagement';
import TheaterManagementReducer from './reducer/TheaterManagementReducer';
import UserManagementReducer from './reducer/UserManagementReducer';


const rootReducer = combineReducers({
    CarouselReducer,
    MovieManagement,
    TheaterManagementReducer,
    UserManagementReducer,
    BookingTicketReducer,
    LoadingReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk))