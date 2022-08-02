import { atom } from "recoil";

export const activities = atom({
  key: "activities",
  default: [],
});

export const activityTags = atom({
  key: "activityTags",
  default: [],
});

export const currentActivityTag = atom({
  key: "currentActivityTag",
  default: "",
});

export const currentActivities = atom({
  key: "currentActivities",
  default: [],
});

export const filteredActivities = atom({
  key: "filteredActivities",
  default: [],
});
