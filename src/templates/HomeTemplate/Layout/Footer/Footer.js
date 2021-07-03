import React from 'react'
import './Footer.css'
import footerImg from '../../../../assets/img/footer_wallpage.jpg'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function Footer(props) {

    const { arrTheaterSystem } = useSelector(state => state.TheaterManagementReducer);

    const arrListTheaterSystem = _.map(arrTheaterSystem, (theaterSystem) => _.pick(theaterSystem, ['maHeThongRap', 'tenHeThongRap','logo']));
    // console.log('arrListTheaterSystem', arrListTheaterSystem);

    const renderPartnerLogo = () =>{
        return arrListTheaterSystem.map((item, index)=>{
            return <li key={index} className='list-none'>
                <img className='w-4/5 h-4/5' src={item.logo} alt={item.tenHeThongRap} />
            </li>
        })
    }

    return(
        <div>
            <footer className="py-4 bg-coolGray-100 text-coolGray-900 bg-gray-500 text-white relative" style={{ background: `url(${footerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='layer'></div>
                <div className="px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50 z-5 w-9/12 mx-auto py-20">
                    <div className="grid grid-cols-12">
                        <div className=" pb-6 col-span-3 md:pb-0 md:col-span-3 z-10">
                            <a href="#">
                                <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt='footer-logo' className='mb-16' />

                            </a>
                            <div className='w-6/12' style={{ color: '#abb7c4' }}>
                                <p className='mb-4'>197 Học Viện Công Nghệ Bưu Chính Viễn Thông Quận 9, Thành Phố Hồ Chí Minh</p>
                                <p>Call us <a href='#' className='text-white' style={{ fontSize: '18px' }}>(+84) 39 888 4505</a></p>
                            </div>
                        </div>

                        <div className="col-span-3 text-center md:text-left z-10 middleCol">
                            <p className="pb-1 text-lg font-medium text-lg bold">Partner</p>
                            <div className='grid grid-cols-3 gap-9'>
                               {renderPartnerLogo()}
                            </div>
                        </div>

                        <div className="col-span-3 text-center md:text-left md:col-span-3 z-10 middleCol">
                            <p className="pb-1 text-lg font-medium text-lg bold">Policy</p>
                            <ul>
                                <li>
                                    <a href="#" className="hover:text-violet-600" >Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-violet-600">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-violet-600">Security</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-3 text-center md:text-left md:col-span-3 z-10 text-center rightCol">
                            <p className="pb-1 text-lg font-medium bold">Account</p>
                            <ul>
                                <li>
                                    <a href="#" className="hover:text-violet-600">My Account</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-violet-600">Watchlist</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-violet-600">Collections</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-violet-600">User Guilde</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t-2 z-10 pt-5 pb-3 footerBot'>
                    <div className='flex justify-between w-3/4 mx-auto'>
                        <a href="#" className='z-10 pl-6'>Văn Trần Trúc Phương</a>
                        <a href="#" className='z-10 pr-40'>Back to top</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
