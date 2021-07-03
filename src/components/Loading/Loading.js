import React from 'react'
import { useSelector } from 'react-redux'
import loading from '../../assets/img/loading.gif'

export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer)


    return (
        <>
            {isLoading ? <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', zIndex: '99', justifyContent: 'center', alignItems: 'center' }}>
                <div className='text-4xl text-white'>
                    <img src={loading} alt="loading" style={{ width: '70vh', height: '70vh' }} />
                </div>
            </div> : ''}
        </>
    )
}
