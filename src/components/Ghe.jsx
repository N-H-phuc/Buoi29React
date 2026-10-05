import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { datGheAction } from "../redux/actions/BookingTicketActions";

export default function Ghe({ ghe, soHangGhe }) {
  const dispatch = useDispatch();
  const { danhSachGheDangChon, isSelecting } = useSelector(
    (state) => state.BookingTicketReducer
  );

  const index = danhSachGheDangChon.findIndex((g) => g.soGhe === ghe.soGhe);

  let classGhe = "ghe";
  let disabled = !isSelecting;

  if (ghe.daDat) {
    classGhe = "gheDaDat";
    disabled = true;
  } else if (index !== -1) {
    classGhe = "gheDangChon";
  }

  // Hàng số (hàng đầu)
  if (soHangGhe === 0) {
    classGhe = "rowNumber";
    disabled = true;
  }

  // Tạo khoảng trống giữa ghế 5 và 6
  const style = {};
  if (ghe.soGhe.toString().endsWith("5") || ghe.soGhe === "5") {
    style.marginRight = "30px";
  }

  return (
    <button
      className={classGhe}
      style={style}
      disabled={disabled}
      onClick={() => dispatch(datGheAction(ghe))}
    >
      {soHangGhe === 0 ? ghe.soGhe : ""}
    </button>
  );
}
