import React, { useEffect, Fragment, useRef } from 'react'
import { Button, Table } from 'antd';
import { Input } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovieAction, getListMovieAction } from '../../../redux/action/MovieAction';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import './films.css'




export default function Films() {




    const { arrMovieDefault } = useSelector(state => state.MovieManagement);
    const searchRef = useRef(null)
    const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(getListMovieAction())
    }, [])


    const data = arrMovieDefault

    const columns = [
        {
            title: 'No.',
            dataIndex: 'maPhim',
            sorter: (a, b) => b.maPhim - a.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: "15%"
        },
        {
            title: 'Image',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <Fragment>
                    <img className='mx-auto' src={text} alt={film.tenPhim} width={70} height={70} onError={(e) => { e.target.onerror = null; e.target.src = `https://picsum.photos/id/${index}/70/70` }} />
                </Fragment>
            },
            width: "15%"

        },
        {
            title: 'Movie Name',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1
                }
                return -1
            },
            sortDirections: ['descend', 'ascend'],
            width: "20%"
        },
        {
            title: 'Description',
            dataIndex: 'moTa',
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1
                }
                return -1
            },
            render: (text, film) => {
                return <Fragment>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + "..." : film.moTa}
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: "30%"
        },
        {
            title: 'Action',
            dataIndex: 'maPhim',
            render: (text, film) => {
              
                return <Fragment>
                    <NavLink
                        key={1}
                        className='text-2xl p-5' to={`/admin/films/edit/${film.maPhim}`}
                        style={{ color: 'blue' }}
                    >
                        <EditOutlined />
                    </NavLink>

                    <span className='text-2xl p-5'
                        key={2}
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${film.tenPhim}? `)) {
                                //call delelte api
                                dispatch(deleteMovieAction(film.maPhim))
                            }
                        }}
                    >
                        <DeleteOutlined />
                    </span>

                    <NavLink
                        key={3}
                        className='text-2xl p-5' to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
                        style={{ color: 'green' }}
                        onClick={() =>{
                            localStorage.setItem("filmParams", JSON.stringify(film))
                        }}
                    >
                        <CalendarOutlined />
                    </NavLink>
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: "30%"
        },
    ];


    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }





    const handleSearchChange = e => {
        if (searchRef.current) {
            clearTimeout(searchRef.current)
        }
        searchRef.current = setTimeout(() => {
            dispatch(getListMovieAction(e.target.value))
        }, 300)
    };

    return (
        <div className='filmManagement'>
            <h3 className='text-4xl text-bold text-center'>Films Management</h3>
            <Button className='mb-5' onClick={() => {
                history.push('/admin/films/addnew')
            }}>Add Movie +</Button>
            <Input
                placeholder="Search movie ..."
                style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}
                onChange={handleSearchChange}
            />

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
        </div>
    )
}
