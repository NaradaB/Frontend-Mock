import "./App.css";
import { useEffect } from "react";
import React from "react";
import { createUseStyles } from "react-jss";
import { useRecoilState } from "recoil";
import {
  facilities,
  facilitiesTags,
  filteredFacilities,
} from "../src/states/FacilitiesAtom";
import {
  activities,
  activityTags,
  filteredActivities,
} from "../src/states/ActivitiesAtom";

//components
import NavBar from "./components/NavBar";
import Facilities from "./components/Facilities";
import Activities from "./components/Activities";

import activitiesJSON from "./json/activities.json";
import facilitiesJSON from "./json/facilities.json";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
function App() {
  const classes = useStyles();

  //facilities
  const [, setFacilitiesList] = useRecoilState(facilities);
  const [, setFacilitiesTags] = useRecoilState(facilitiesTags);
  const [, setFilteredFacilities] = useRecoilState(filteredFacilities);

  //activities
  const [, setActivitiesList] = useRecoilState(activities);
  const [, setActivityTags] = useRecoilState(activityTags);
  const [, setFilteredActivities] = useRecoilState(filteredActivities);

  useEffect(() => {
    //facilitiesJSON
    let facilitiesArray = [...facilitiesJSON.data];
    facilitiesArray.sort((facilityA, facilityB) =>
      facilityA.name > facilityB.name ? 1 : -1
    );
    let tagSet = new Set();

    facilitiesArray.forEach((facility) => {
      facility.tags.forEach((tag) => {
        tagSet.add(tag.name);
      });
    });

    setFacilitiesTags(Array.from(tagSet).sort());
    setFacilitiesList(facilitiesArray);
    setFilteredFacilities(facilitiesArray);

    //activitiesJSON
    let activitiesArray = [...activitiesJSON.data];
    tagSet = new Set();

    activitiesArray.forEach((activity) => {
      activity.tags.forEach((tag) => {
        tagSet.add(tag.name);
      });
    });
    setActivityTags(Array.from(tagSet).sort());
    setActivitiesList(activitiesArray);
    setFilteredActivities(activitiesArray);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className={classes.container}>
        <Facilities></Facilities>
        <Activities></Activities>
      </div>
    </div>
  );
}

export default App;
