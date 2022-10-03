import React, { Component } from "react";
// xử dụng thư viện kết nối với redux
import { connect } from "react-redux";
class Productitem extends Component {
  render() {
    let { product } = this.props;
    console.log(product);
    return (
      <div>
        <div className="card text-left" style={{ width: "18rem" }}>
          <img
            style={{ height: "450", width: "450" }}
            src={product.hinhAnh}
            className="card-img-top"
            alt={product.hinhAnh}
          />
          <div className="card-body">
            <h5 className="card-title">{product.giaBan}</h5>
            <p className="card-text">{product.tenSP}</p>
            <button
              className="btn btn-success "
              onClick={() => {
                this.props.themGioHang(product);
              }}
            >
              Thêm Sản Phẩm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanpham) => {
      // tạo một props
      let spGioHang = {
        maSp: sanpham.masp,
        giaBan: sanpham.giaBan,
        hinhAnh: sanpham.hinhAnh,
        tenSp: sanpham.tenSP,
        soLuong: 1,
      };
      let action = {
        type: "THEM_GIO_HANG",
        spGioHang,
      };
      dispatch(action);
    },
  };
}; //dispatch là gửi lên

export default connect(null, mapDispatchToProps)(Productitem);
