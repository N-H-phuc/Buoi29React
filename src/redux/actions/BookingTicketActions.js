export const DAT_GHE = "DAT_GHE";
export const HUY_GHE = "HUY_GHE";
export const BAT_DAU_CHON = "BAT_DAU_CHON";
export const XAC_NHAN_DAT_VE = "XAC_NHAN_DAT_VE";

export const batDauChonAction = (hoTen, soGhe) => {
  return {
    type: BAT_DAU_CHON,
    hoTen,
    soGhe: Number(soGhe),
  };
};

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};

export const xacNhanDatVeAction = () => {
  return {
    type: XAC_NHAN_DAT_VE,
  };
};
