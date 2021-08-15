import React, { useEffect, Fragment } from 'react'
import { Button, Table } from 'antd';
import { Input } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { getListMovieAction } from '../../../redux/action/MovieAction';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';


const { Search } = Input;






export default function Films() {


    const { arrMovieDefault } = useSelector(state => state.MovieManagement);
    const dispatch = useDispatch();

    console.log("🚀 ~ file: Films.js ~ line 49 ~ Films ~ arrMovieDefault", arrMovieDefault)
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
                    <img src={text} alt={film.tenPhim} width={70} height={70} onError={(e) => { e.target.onerror = null; e.target.src = `https://picsum.photos/id/${index}/70/70` }} />
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
            dataIndex: 'action',
            render: (text, film) => {
                return <Fragment>
                    <NavLink
                        className='text-2xl p-5' to='/'
                        style={{ color: 'blue' }}
                    >
                        <EditOutlined />
                    </NavLink>

                    <NavLink className='text-2xl p-5' to='/'
                        style={{ color: 'red' }}
                    >
                        <DeleteOutlined />
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





    const onSearch = value => console.log(value);

    return (
        <div >
            <h3 className='text-4xl text-bold'>Films Management</h3>
            <Button className='mb-5' onClick={() => {
                history.push('/admin/films/addnew')
            }}>Add Movie +</Button>
            <Search
                className='mb-5'
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}
