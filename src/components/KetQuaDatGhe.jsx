import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { xacNhanDatVeAction } from "../redux/actions/BookingTicketActions";

export default function KetQuaDatGhe() {
  const { danhSachDatVe } = useSelector((state) => state.BookingTicketReducer);
  const dispatch = useDispatch();

  return (
    <div className="ket-qua mt-4 text-center">
      <div className="screen-banner mb-3">SCREEN THIS WAY</div>

      <button
        className="btn btn-light rounded-pill px-4 mb-4"
        onClick={() => dispatch(xacNhanDatVeAction())}
      >
        Confirm Selection
      </button>

      <table
        className="table table-bordered bg-white mx-auto"
        style={{ maxWidth: 500 }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Seats</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {danhSachDatVe.map((ve, index) => (
            <tr key={index}>
              <td>{ve.hoTen}</td>
              <td>{ve.soGhe}</td>
              <td>{ve.danhSachSoGhe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
