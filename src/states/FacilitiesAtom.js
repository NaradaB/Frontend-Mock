import { atom } from "recoil";

export const facilities = atom({
  key: "facilities",
  default: [],
});

export const facilitiesTags = atom({
  key: "facilitiesTags",
  default: [],
});

export const currentFacilityTag = atom({
  key: "currentFacilityTag",
  default: "",
});

export const filteredFacilities = atom({
  key: "filteredFacilities",
  default: [],
});

//Button
export const selectedFacility = atom({
  key: "selectedFacility",
  default: {},
});
