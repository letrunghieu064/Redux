import React, { Component } from "react";
//import GioHangRedux from "./GioHangRedux";
import Productitem from "./Productitem";
export default class ProductListRedux extends Component {
  mangSanPham = [
    {
      masp: 1,
      tenSP: "apple",
      manhinh: "6 in",
      hedieuhanh: "IOS",
      cammeraTruoc: "20MP",
      cammeraSau: "5mp",
      ram: "4GB",
      rom: "64GB",
      giaBan: 57000,
      hinhAnh:
        "https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/large/public/field/image/2019/04/galaxy-fold-hands-27.jpg",
    },
    {
      masp: 2,
      tenSP: "sámung",
      manhinh: "6 in",
      hedieuhanh: "IOS",
      cammeraTruoc: "20MP",
      cammeraSau: "5mp",
      ram: "4GB",
      rom: "64GB",
      giaBan: 56000,
      hinhAnh:
        "https://cdn.fastcare.vn/fastcare/2021/12/dien-thoai-iphone-13-pro-max-bi-loi-man-hinh.jpg",
    },
    {
      masp: 3,
      tenSP: "sammung",
      manhinh: "6 in",
      hedieuhanh: "IOS",
      cammeraTruoc: "20MP",
      cammeraSau: "5mp",
      ram: "4GB",
      rom: "64GB",
      giaBan: 56000,
      hinhAnh:
        "https://image-us.24h.com.vn/upload/1-2022/images/2022-02-11/image5-1644544636-943-width660height450.jpg",
    },
  ];
  rederProductItem = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <Productitem product={sanPham} />;
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.rederProductItem()}</div>;
  }
}
