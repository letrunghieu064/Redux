const stateGioHang = {
  giohang: [
    {
      maSp: 2,
      giaBan: 56000,
      hinhAnh:
        "https://cdn.fastcare.vn/fastcare/2021/12/dien-thoai-iphone-13-pro-max-bi-loi-man-hinh.jpg",
      tenSp: "sámung",
      soLuong: 1,
    },
  ],
};
const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.giohang.findIndex(
        (sp) => sp.maSp === action.spGioHang.maSp
      );
      if (index !== -1) {
        state.giohang[index].soLuong += 1;
      } else {
        state.giohang.push(action.spGioHang);
        console.log(action.spGioHang);
      }
      // cập nhập lại state
      state.giohang = [...state.giohang];

      return { ...state };
    }

    case "XOA_GIO_HANG": {
      let GioHangCapNhat = [...state.giohang];
      let index = state.giohang.findIndex((sp) => sp.maSp === action.maSP);
      if (index !== -1) {
        GioHangCapNhat.splice(index, 1);
      }
      // cập nhập lại state
      state.giohang = GioHangCapNhat;
      return { ...state };
    }

    default:
      return { ...state };

    // return { ...state };
  }
};

export default BaiTapGioHangReducer;
