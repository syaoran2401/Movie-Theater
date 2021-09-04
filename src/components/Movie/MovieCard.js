import React, { useState } from 'react'
import "./Movie_Card.css";
import { PlayCircleOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';



export default function Movie_Card({ itemMovie }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [movieSrc, setMovieSrc] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
        setMovieSrc(itemMovie.trailer)
    };

    const handleCancel = () => {
        setMovieSrc('')
        setIsModalVisible(false);
    };

    return (
        <div className="center mt-14">
            <div className="property-card">
                <div className='movie-overlay'></div>
                <div className='movie-trailer'>
                    <button onClick={showModal} style={{ outline: 'none' }}>
                        <PlayCircleOutlined style={{ fontSize: '5rem', color: 'white', cursor: 'pointer' }} />
                    </button>
                </div>

                <Modal visible={isModalVisible}
                    onCancel={handleCancel}
                    style={{ height: '500px' }}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>]}
                >
                    <iframe
                        src={movieSrc}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='100%'
                        height='100%'
                    />
                </Modal>

                <div className="property-image">
                    <div style={{
                        backgroundImage: `url(${itemMovie.hinhAnh})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '350px'
                    }}>
                        <img src={itemMovie.hinhAnh} alt={itemMovie.hinhAnh} className='w-100 opacity-0' style={{ height: '330px' }} />
                    </div>
                </div>
                <div className="property-description">
                    <h5> {itemMovie.tenPhim} </h5>
                    <p className='leading-relaxed text-sm'>{itemMovie.moTa.length > 100 ? <span>{itemMovie.moTa.slice(0, 100)}...</span> : <span>{itemMovie.moTa}</span>}</p>
                </div>
                <div>
                    <div className='movie-groupId ' style={{ top: '5%' }}>
                        {itemMovie.maNhom}
                    </div>
                    <div className='movieRate' style={{ top: '5%' }}>
                        {itemMovie.danhGia}
                    </div>
                </div>
            </div>
        </div>
    )
}
