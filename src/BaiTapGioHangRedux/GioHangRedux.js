import React, { Component } from "react";
import { connect } from "react-redux";
import "./GioHangRedux.css";
class GioHangRedux extends Component {
  renderTongTien = () => {
    return this.props.gioHang
      .reduce((tonggiatien, sp, index) => {
        return (tonggiatien += sp.giaBan * sp.soLuong);
      }, 0)
      .toString();
  };
  render() {
    console.log(this.props.gioHang);

    return (
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Giỏ Hàng </div>
            <table class="table">
              <thead>
                <tr>
                  <th>mã sản phẩm </th>
                  <th>hình ảnh sản phẩm </th>
                  <th>tên sản phẩm </th>
                  <th>giá sản phẩm </th>
                  <th>số lượng </th>
                  <th>thành tiền </th>
                  <th>xoá</th>
                </tr>
              </thead>
              <tbody>
                {this.props.gioHang.map((sp, index) => {
                  return (
                    <tr key={index}>
                      <td>{sp.maSp}</td>
                      <td>
                        <img
                          style={{ height: 70, width: 70 }}
                          src={sp.hinhAnh}
                          alt={sp.hinhAnh}
                        />
                      </td>
                      <td>{sp.tenSp}</td>

                      <td>{sp.giaBan}</td>
                      <td>{sp.soLuong}</td>
                      <td>{(sp.soLuong * sp.giaBan).toString()}</td>
                      <td>
                        <button
                          class="btn btn-danger "
                          onClick={() => {
                            this.props.XoaGioHang(sp.maSp);
                          }}
                        >
                          xoá
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr class="text-right">
                  tổng giá tiền tất cả các sản phẩm : {this.renderTongTien()}
                </tr>
              </tbody>
            </table>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // lấy state của redux trong rootReducer
  return {
    gioHang: state.stateGioHang.giohang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    XoaGioHang: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSP: maSP,
      };
      console.log(maSP);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // connect component đến redux (rootreducer ) để lấy props của của reducer
