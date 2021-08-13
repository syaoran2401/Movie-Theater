import React, { useEffect } from 'react'
import { Route } from 'react-router'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'

export default function HomeTemplate({ Component, ...resProps }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    return (
        <Route {...resProps} render={(propsRoute) => {
            return <>
                <Header {...propsRoute} />
                <Component {...propsRoute} />
                <Footer/>
            </>
        }}>
        </Route>
    )
}
