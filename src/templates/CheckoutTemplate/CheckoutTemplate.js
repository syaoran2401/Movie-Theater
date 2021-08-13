import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router'
import { USER_LOGIN } from '../../util/Settings/config'

export default function CheckoutTemplate({ Component, ...resProps }) {


    useEffect(() => {
        window.scrollTo(0, 0);
    })


    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }


    return (
        <Route {...resProps} render={(propsRoute) => {
            return <>
                <Component {...propsRoute} />
            </>
        }}>
        </Route>
    )
}
