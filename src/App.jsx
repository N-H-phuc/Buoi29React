import React from "react";
import FormDatGhe from "./components/FormDatGhe";
import DanhSachGhe from "./components/DanhSachGhe";
import KetQuaDatGhe from "./components/KetQuaDatGhe";

export default function App() {
  return (
    <div className="booking-movie">
      <div className="container">
        <h1 className="text-center text-white display-4 pt-4 mb-4">
          MOVIE SEAT SELECTION
        </h1>

        <div className="booking-box mx-auto p-4">
          <FormDatGhe />
          <DanhSachGhe />
          <KetQuaDatGhe />
        </div>
      </div>
    </div>
  );
}
