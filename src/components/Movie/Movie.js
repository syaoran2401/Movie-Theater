import React from 'react'




export default function Movie({ itemMovie }) {
    return (
        <div className="h-full p-4  bg-opacity-75 pb-24 rounded-lg overflow-hidden text-center relative">
            <div className="relative cursor-pointer">
                <div style={{
                backgroundImage:`url(${itemMovie.hinhAnh}),
                url('https://picsum.photos/1000/200')`,
                backgroundPosition:'top', 
                backgroundSize:'cover',
                 }}>
                    <img src={itemMovie.hinhAnh} alt={itemMovie.hinhAnh} className='mx-auto w-full h-full opacity-0' style={{ height: '400px' }}/>
                    <div> 
                        <div className='movie-groupId'>
                            {itemMovie.maNhom}
                        </div>
                        <div className='movieRate'>
                            {itemMovie.danhGia}
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="movieName h-16">{itemMovie.tenPhim}</h1>
            <p className='leading-relaxed text-white'>{itemMovie.moTa.length > 100 ? <span>{itemMovie.moTa.slice(0,100)}...</span>: <span>{itemMovie.moTa}</span>}</p>
        </div>
    )
}
