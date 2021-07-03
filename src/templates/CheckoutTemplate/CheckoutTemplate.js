import React from 'react'
import { Route,Redirect } from 'react-router'
import { USER_LOGIN } from '../../util/Settings/config'

export default function CheckoutTemplate({ Component, ...resProps }) {

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login'/>
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
