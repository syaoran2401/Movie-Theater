import { GET_LIST_THEATER_SYSTEM } from "../types/TheaterType"

const initialState = {
  arrTheaterSystem: [
    // {
    //   "maHeThongRap": "BHDStar",
    //   "tenHeThongRap": "BHD Star Cineplex",
    //   "biDanh": "bhd-star-cineplex",
    //   "logo": "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png"
    // },
  ],

  arrListTheater: [
    // {
    //   "maCumRap": "bhd-star-cineplex-3-2",
    //   "tenCumRap": "BHD Star Cineplex - 3/2",
    //   "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    //   "danhSachRap": [
    //     {
    //       "maRap": 451,
    //       "tenRap": "Rạp 1"
    //     },
    //     {
    //       "maRap": 452,
    //       "tenRap": "Rạp 2"
    //     },
    //     {
    //       "maRap": 453,
    //       "tenRap": "Rạp 3"
    //     },
    //     {
    //       "maRap": 454,
    //       "tenRap": "Rạp 4"
    //     },
    //     {
    //       "maRap": 455,
    //       "tenRap": "Rạp 5"
    //     },
    //     {
    //       "maRap": 456,
    //       "tenRap": "Rạp 6"
    //     },
    //     {
    //       "maRap": 457,
    //       "tenRap": "Rạp 7"
    //     },
    //     {
    //       "maRap": 458,
    //       "tenRap": "Rạp 8"
    //     },
    //     {
    //       "maRap": 459,
    //       "tenRap": "Rạp 9"
    //     },
    //     {
    //       "maRap": 460,
    //       "tenRap": "Rạp 10"
    //     }
    //   ]
    // },
  ],

  arrListShowTime: [
    [
      {
        "lstCumRap": [
          {
            "danhSachPhim": [
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 39637,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-01T10:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39638,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-01T12:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39639,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-01T14:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39640,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-01T16:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39641,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-01T18:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39642,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-01T20:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39675,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-07T14:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39676,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-07T16:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39677,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-07T18:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39678,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-07T20:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39679,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-08T10:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39680,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-08T12:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39681,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-08T14:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39682,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-08T16:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39683,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-08T18:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39684,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-08T20:10:00",
                    "giaVe": 75000
                  },
                  {
                    "maLichChieu": 39685,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2019-01-09T10:10:00",
                    "giaVe": 75000
                  },
                ],
                "maPhim": 1494,
                "tenPhim": "Gene",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/gene_gp01.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 40266,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2020-03-15T12:00:00",
                    "giaVe": 100000
                  },
                  {
                    "maLichChieu": 40297,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2020-07-04T15:20:00",
                    "giaVe": 100000
                  }
                ],
                "maPhim": 2602,
                "tenPhim": "Chuyến tàu may mắn",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/chuyen-tau-may-man_gp01.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 40330,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2020-04-20T05:20:48",
                    "giaVe": 90000
                  },
                  {
                    "maLichChieu": 42983,
                    "maRap": "906",
                    "tenRap": "Rạp 6",
                    "ngayChieuGioChieu": "2021-05-11T19:47:00",
                    "giaVe": 75000
                  }
                ],
                "maPhim": 1314,
                "tenPhim": "Gà Trống Nuôi Con",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ga-trong-nuoi-con_gp01.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 40625,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2020-11-04T11:32:00",
                    "giaVe": 120000
                  }
                ],
                "maPhim": 4430,
                "tenPhim": "Chị Mười Ba",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/chi-muoi-ba_gp01.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 40633,
                    "maRap": "908",
                    "tenRap": "Rạp 8",
                    "ngayChieuGioChieu": "2020-11-05T16:14:00",
                    "giaVe": 125000
                  }
                ],
                "maPhim": 4431,
                "tenPhim": "Vượt Qua Sóng Gió ",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/vuot-qua-song-gio_gp01.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 40752,
                    "maRap": "903",
                    "tenRap": "Rạp 3",
                    "ngayChieuGioChieu": "2020-11-21T04:00:00",
                    "giaVe": 75000
                  }
                ],
                "maPhim": 4666,
                "tenPhim": "Joker",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/joker_gp01.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 40785,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2020-12-03T10:33:00",
                    "giaVe": 75000
                  }
                ],
                "maPhim": 4956,
                "tenPhim": "Biệt đội diệt quỷ: Gretel & Hansel",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/biet-doi-diet-quy-gretel-hansel_gp01.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "lstLichChieuTheoPhim": [
                  {
                    "maLichChieu": 41340,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2021-01-05T23:00:00",
                    "giaVe": 80000
                  },
                  {
                    "maLichChieu": 41341,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2021-01-06T23:00:00",
                    "giaVe": 80000
                  },
                  {
                    "maLichChieu": 41342,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2021-01-07T23:00:00",
                    "giaVe": 80000
                  },
                  {
                    "maLichChieu": 41343,
                    "maRap": "901",
                    "tenRap": "Rạp 1",
                    "ngayChieuGioChieu": "2021-01-08T23:00:00",
                    "giaVe": 80000
                  }
                ],
                "maPhim": 4668,
                "tenPhim": "Vệ Sĩ Sát Thủ: The Hitman's Bodyguard",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ve-si-sat-thu-the-hitman-s-bodyguard_gp01.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
              },
           
            ],
            "maCumRap": "megags-cao-thang",
            "tenCumRap": "MegaGS - Cao Thắng",
            "diaChi": "19 Cao Thắng, Q.3"
          }
        ],
        "maHeThongRap": "MegaGS",
        "tenHeThongRap": "MegaGS",
        "logo": "http://movieapi.cyberlearn.vn/hinhanh/megags.png",
        "mahom": "GP01"
      }
    ],
  ]
}


const TheaterManagementReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_THEATER_SYSTEM: {
      return { ...state, arrTheaterSystem: action.arrTheaterSystem }
    }

    default:
      return state
  }
}

export default TheaterManagementReducer
