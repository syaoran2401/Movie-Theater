import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navitem(props) {
    const {tolink, item} = props
    return (
        <li id={item}>
        <NavLink exact to={tolink}>{item}</NavLink>
        </li>
    )
}
