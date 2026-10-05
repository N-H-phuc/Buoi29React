import danhSachGheData from "../../data/danhSachGhe.json";
import {
  DAT_GHE,
  HUY_GHE,
  BAT_DAU_CHON,
  XAC_NHAN_DAT_VE,
} from "../actions/BookingTicketActions";

const stateDefault = {
  danhSachGhe: danhSachGheData,
  danhSachGheDangChon: [],
  hoTen: "",
  soGhe: 0,
  isSelecting: false,
  isConfirmed: false,
  danhSachDatVe: [], // mảng chứa nhiều lần đặt vé
};

const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case BAT_DAU_CHON: {
      return {
        ...state,
        hoTen: action.hoTen,
        soGhe: action.soGhe,
        isSelecting: true,
        danhSachGheDangChon: [],
        isConfirmed: false,
      };
    }

    case DAT_GHE: {
      if (!state.isSelecting) return state;

      let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
      let index = danhSachGheDangChonUpdate.findIndex(
        (g) => g.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        danhSachGheDangChonUpdate.splice(index, 1);
      } else {
        if (danhSachGheDangChonUpdate.length >= state.soGhe) {
          alert(`Bạn chỉ được chọn tối đa ${state.soGhe} ghế!`);
          return state;
        }
        danhSachGheDangChonUpdate.push(action.ghe);
      }

      return { ...state, danhSachGheDangChon: danhSachGheDangChonUpdate };
    }

    case HUY_GHE: {
      let danhSachGheDangChonUpdate = state.danhSachGheDangChon.filter(
        (g) => g.soGhe !== action.soGhe
      );
      return { ...state, danhSachGheDangChon: danhSachGheDangChonUpdate };
    }

    case XAC_NHAN_DAT_VE: {
      if (state.danhSachGheDangChon.length === 0) {
        alert("Vui lòng chọn ghế!");
        return state;
      }
      if (state.danhSachGheDangChon.length !== state.soGhe) {
        alert(`Bạn phải chọn đủ ${state.soGhe} ghế!`);
        return state;
      }

      // Cập nhật ghế đã đặt
      let danhSachGheUpdate = state.danhSachGhe.map((hang) => {
        return {
          ...hang,
          danhSachGhe: hang.danhSachGhe.map((ghe) => {
            let isSelected = state.danhSachGheDangChon.find(
              (g) => g.soGhe === ghe.soGhe
            );
            if (isSelected) {
              return { ...ghe, daDat: true };
            }
            return ghe;
          }),
        };
      });

      // Thêm 1 dòng mới vào danh sách đặt vé
      const veMoi = {
        hoTen: state.hoTen,
        soGhe: state.soGhe,
        danhSachSoGhe: state.danhSachGheDangChon.map((g) => g.soGhe).join(", "),
      };

      return {
        ...state,
        danhSachGhe: danhSachGheUpdate,
        isConfirmed: true,
        isSelecting: false,
        danhSachGheDangChon: [],
        danhSachDatVe: [...state.danhSachDatVe, veMoi], // thêm vào mảng
      };
    }

    default:
      return state;
  }
};

export default BookingTicketReducer;
