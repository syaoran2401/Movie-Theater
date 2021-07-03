import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div>
            <header className="p-4  bg-black text-white fixed w-full z-50 bg-opacity-50">
                <div className="container flex justify-between h-16 mx-auto">
                    <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberLearn.vn" />
                    </NavLink>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex relative navLink">
                            <NavLink to='/home' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">HOME</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/contact' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">CONTACT</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/news' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">COMING MOVIE</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/login' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">SIGN IN</NavLink>
                        </li>
                        <li className="flex relative navLink">
                            <NavLink to='/signUp' className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white font-bold hover:text-white">SIGN UP</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </header>

        </div>
    )
}
