import React from "react";
import Ghe from "./Ghe";

export default function HangGhe({ hangGhe, soHangGhe }) {
  return (
    <div className="hang-ghe d-flex align-items-center mb-1">
      <span className="hang-label text-light me-2" style={{ width: 25 }}>
        {hangGhe.hang}
      </span>
      {hangGhe.danhSachGhe.map((ghe, index) => (
        <Ghe key={index} ghe={ghe} soHangGhe={soHangGhe} />
      ))}
    </div>
  );
}
