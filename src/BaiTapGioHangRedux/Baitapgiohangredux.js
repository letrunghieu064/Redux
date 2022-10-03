import React, { Component } from "react";
import ProductListRedux from "./ProductListRedux";
import GioHangRedux from "./GioHangRedux";
import { connect } from "react-redux";
class Baitapgiohangredux extends Component {
  rederTongSoluong = () => {
    return this.props.gioHang
      .reduce((tongsoluong, sp, index) => {
        return (tongsoluong += sp.soLuong);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div>
        <h3>Danh Sách các Sản phẩm </h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i classname="fa fa-cart mr-5">
              <i class="fa fa-cart-arrow-down"></i>({this.rederTongSoluong()}
              )Giỏ Hàng
            </i>
          </span>
        </div>
        <ProductListRedux />
        <GioHangRedux />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.giohang,
  };
};
export default connect(mapStateToProps)(Baitapgiohangredux);
