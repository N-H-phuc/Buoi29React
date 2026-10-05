import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batDauChonAction } from "../redux/actions/BookingTicketActions";

export default function FormDatGhe() {
  const [hoTen, setHoTen] = useState("");
  const [soGhe, setSoGhe] = useState("");
  const dispatch = useDispatch();
  const { isSelecting } = useSelector((state) => state.BookingTicketReducer);

  const handleStart = (e) => {
    e.preventDefault();
    if (!hoTen.trim()) {
      alert("Vui lòng nhập Name!");
      return;
    }
    if (!soGhe || soGhe <= 0) {
      alert("Vui lòng nhập Number of Seats hợp lệ!");
      return;
    }

    dispatch(batDauChonAction(hoTen, soGhe));
  };

  return (
    <div className="form-dat-ghe p-4">
      <p className="text-warning text-center mb-3">
        Fill The Required Details Below And Select Your Seats
      </p>
      <form onSubmit={handleStart}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="text-light">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={hoTen}
              onChange={(e) => setHoTen(e.target.value)}
              disabled={isSelecting}
            />
          </div>
          <div className="col-md-6">
            <label className="text-light">
              Number of Seats <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              value={soGhe}
              onChange={(e) => setSoGhe(e.target.value)}
              disabled={isSelecting}
              min="1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-light rounded-pill px-4"
          disabled={isSelecting}
        >
          Start Selecting
        </button>
      </form>
    </div>
  );
}
