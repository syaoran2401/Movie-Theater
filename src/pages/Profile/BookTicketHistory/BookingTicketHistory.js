import React, { useState } from 'react'
import { Fragment } from 'react'
import { Row, Col, Pagination } from 'antd'
import './bookingTicketHistory.css'
import moment from 'moment'


export default function BookingTicketHistory(props) {

    const { ticketInfo, active, setActive } = props;

    const [state, setState] = useState({
        minValue: 0,
        maxValue: 3
    });



    const handleChange = (value) => {
        if (value <= 1) {
            setState({
                minValue: 0,
                maxValue: 3
            })
        } else {
            setState({
                minValue: value * 2,
                maxValue: value * 3
            })
        }
    }

  

    const renderMovieTicket = () => {
        return ticketInfo?.slice(state.minValue, state.maxValue).map((ticket, index) => {
            return <Col key={index} xs={24} md={12} lg={12} xl={8}>
                <div className='mask text-center'>
                    <div >
                        <div className="movie-header" style={{ backgroundImage: `url(${ticket.hinhAnh})` }}>
                        </div>
                        <div className="movie-content">
                            <div className="movie-content-header">
                                <h3 className="movie-title">{ticket.tenPhim}</h3>
                            </div>
                            <div className="movie-info">
                                <div className="info-section">
                                    <label>Date Book</label>
                                    <span>{moment(ticket.ngayDat).format("DD/MM/YYYY")} </span>
                                </div>

                                <div className="info-section">
                                    <label>Group</label>
                                    <span>{ticket.danhSachGhe[0].tenCumRap}</span>
                                </div>
                                <div className="info-section">
                                    <label>Seat</label>
                                    <span>{ticket.danhSachGhe[0].tenGhe}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        })
    }


    return (
        <Fragment>
            <Row>
                <Col flex="auto">  <h1 className="subtopic">Ticket Book</h1></Col>
                <Col flex="none">
                    <div
                        style={{ cursor: 'pointer' }}
                        className='m-5 text-xl'
                        onClick={() => {
                            let updateActive = { ...active }
                            updateActive.updateForm = false;
                            updateActive.bookTicketHistory = false
                            setActive(updateActive);
                        }}>X</div>
                </Col>
            </Row>

            <div className='container mt-6'>
                <Row gutter={[32, 16]}>
                    {renderMovieTicket()}
                </Row>

            </div>

            <div className='flex justify-end items-center m-20 profile-pagination'>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={3} //default size of page
                onChange={handleChange}
                total={ticketInfo?.length} //total number of card data available
            />
            </div>
        </Fragment>
    )
}
