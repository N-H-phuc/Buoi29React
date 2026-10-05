import React from "react";
import { useSelector } from "react-redux";
import HangGhe from "./HangGhe";

export default function DanhSachGhe() {
  const { danhSachGhe, isSelecting } = useSelector(
    (state) => state.BookingTicketReducer
  );

  return (
    <div className="danh-sach-ghe mt-3">
      {/* Legend */}
      <div className="legend d-flex justify-content-center gap-4 mb-3 text-light">
        <div>
          <span
            className="gheDangChon d-inline-block"
            style={{ width: 20, height: 20 }}
          ></span>{" "}
          Selected Seat
        </div>
        <div>
          <span
            className="gheDaDat d-inline-block"
            style={{ width: 20, height: 20 }}
          ></span>{" "}
          Reserved Seat
        </div>
        <div>
          <span
            className="ghe d-inline-block"
            style={{ width: 20, height: 20 }}
          ></span>{" "}
          Empty Seat
        </div>
      </div>

      {/* Hiện chữ khi đã Start Selecting */}
      {isSelecting && (
        <h4 className="text-center text-warning mb-3">
          Please Select your Seats NOW!
        </h4>
      )}

      {danhSachGhe.map((hang, index) => (
        <HangGhe key={index} hangGhe={hang} soHangGhe={index} />
      ))}
    </div>
  );
}
