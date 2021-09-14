import React from 'react'
import './Footer.css'
import footerImg from '../../../../assets/img/footer_wallpage.jpg'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function Footer(props) {

    const { arrTheaterSystem } = useSelector(state => state.TheaterManagementReducer);

    const arrListTheaterSystem = _.map(arrTheaterSystem, (theaterSystem) => _.pick(theaterSystem, ['maHeThongRap', 'tenHeThongRap', 'logo']));
    // console.log('arrListTheaterSystem', arrListTheaterSystem);

    const renderPartnerLogo = () => {
        return arrListTheaterSystem.map((item, index) => {
            return <li key={index} className='list-none'>
                <img className='w-4/5 h-4/5' src={item.logo} alt={item.tenHeThongRap} />
            </li>
        })
    }

    return (
        <div>
            <footer className="py-4 bg-coolGray-100 text-coolGray-900 bg-gray-500 text-white relative" style={{ background: `url(${footerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='layer'></div>
                <div className="px-6 space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50 z-5 w-9/12 mx-auto py-20">
                    <div className="grid grid-cols-12">
                        <div className="xs:hidden xl:block pb-6 col-span-3 md:pb-0 md:col-span-3 z-10">
                            <a href="#Home">
                                <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt='footer-logo' className='mb-16' />

                            </a>
                            <div className='w-6/12' style={{ color: '#abb7c4' }}>
                                <p className='mb-4'>197 Học Viện Công Nghệ Bưu Chính Viễn Thông Quận 9, Thành Phố Hồ Chí Minh</p>
                                <p>Call us <a href='#Home' className='text-white' style={{ fontSize: '16px' }}>(+84) 39 888 4505</a></p>
                            </div>
                        </div>

                        <div className="xs:hidden md:block md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-3 text-center md:text-left z-10 middleCol middleCol__left">
                            <p className="pb-1 text-lg font-medium bold">Partner</p>
                            <div className='grid grid-cols-3 gap-9'>
                                {renderPartnerLogo()}
                            </div>
                        </div>

                        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-3 text-center md:text-left  z-10 middleCol middleCol__right">
                            <p className="pb-1 text-lg font-medium bold">Policy</p>
                            <ul>
                                <li>
                                    <a href="#home" className="hover:text-violet-600" >Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#home" className="hover:text-violet-600">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#home" className="hover:text-violet-600">Security</a>
                                </li>
                            </ul>
                        </div>

                        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-3 md:text-left  z-10 text-center rightCol">
                            <p className="pb-1 text-lg font-medium bold">Account</p>
                            <ul>
                                <li>
                                    <a href="#home" className="hover:text-violet-600">My Account</a>
                                </li>
                                <li>
                                    <a href="#home" className="hover:text-violet-600">Watchlist</a>
                                </li>
                                <li>
                                    <a href="#home" className="hover:text-violet-600">Collections</a>
                                </li>
                                <li>
                                    <a href="#home" className="hover:text-violet-600">User Guilde</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t-2 z-10 pt-5 pb-5 container mx-auto footerBot'>
                    <div className='flex justify-between '>
                        <a href="#home" className='z-10  whitespace-nowrap'>Văn Trần Trúc Phương</a>
                        <a href="#home" className='z-10 whitespace-nowrap '>Back to top</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
