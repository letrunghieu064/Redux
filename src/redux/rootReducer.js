import { combineReducers } from "redux";
import BaiTapGioHangReducer from "../redux/BaiTapGioHangReducer";
const rootReducer = combineReducers({
  //store sẽ chứa các state
  stateGioHang: BaiTapGioHangReducer, // state
});

export default rootReducer;
