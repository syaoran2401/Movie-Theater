import './App.css';
import { createBrowserHistory } from "history";
import {  Router, Switch } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetail from './pages/Movie/MovieDetail';
import Checkout from './pages/Checkout/Checkout';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate'
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import Users from './pages/Admin/Users/Users';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AddNewUser from './pages/Admin/Users/AddNewUser/AddNewUser';


// import { Suspense, lazy } from 'react'  // Lazy loading ( thư viên react )

// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate exact path='/' Component={Home} />
        <HomeTemplate exact path='/home' Component={Home} />
        <HomeTemplate exact path='/news' Component={News} />
        <HomeTemplate exact path='/contact' Component={Contact} />
        <HomeTemplate exact path='/movieDetail/:maPhim' Component={MovieDetail} />

        <CheckoutTemplate exact path='/checkout/:maLichChieu' Component={Checkout} />

        {/* Lazy Loading */}
        {/* <Suspense fallback={<h1>LOADING ...</h1>}>
          <CheckoutTemplateLazy exact path='/checkout/:maLichChieu' Component={Checkout} />
        </Suspense> */}

        <UserTemplate exact path='/login' Component={Login} />
        <UserTemplate exact path='/register' Component={Register} />
        <HomeTemplate exact path='/profile' Component={Profile} />


        <AdminTemplate exact path='/admin/' Component={Dashboard} />
        <AdminTemplate exact path='/admin/users' Component={Users} />
        <AdminTemplate exact path='/admin/films' Component={Films} />
        <AdminTemplate exact path='/admin/films/addnew' Component={AddNew} />
        <AdminTemplate exact path='/admin/films/edit/:id' Component={Edit} />
        <AdminTemplate exact path='/admin/films/showtime/:id/:tenphim' Component={ShowTime} />


        <AdminTemplate exact path='/admin/user/addNewUser/:groupID' Component={AddNewUser} />
        <AdminTemplate exact path='/admin/user/editUser/:groupID/:userName' Component={AddNewUser} />



      </Switch>
    </Router>

  );
}

export default App;
