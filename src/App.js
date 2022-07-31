import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import {
  facilities,
  facilitiesTags,
  filteredFacilities,
} from "../src/states/FacilitiesAtom";
import { activities } from "../src/states/ActivitiesAtom";
import NavBar from "./components/NavBar";
import Facilities from "./components/Facilities";

import activitiesCode from "./json/activities.json";
import facilitiesCode from "./json/facilities.json";
function App() {
  //facilities
  const [facilitiesList, setFacilitiesList] = useRecoilState(facilities);
  const [facilitiesTagsList, setFacilitiesTags] =
    useRecoilState(facilitiesTags);
  const [filteredFacilitiesList, setFilteredFacilities] =
    useRecoilState(filteredFacilities);

  //activities
  const [activitiesList, setActivitiesList] = useRecoilState(activities);

  useEffect(() => {
    console.log(facilitiesCode.data);
    axios.get("http://localhost:3002/facilities").then((response) => {
      let responseArray = response.data.data;
      console.log(responseArray);

      responseArray.sort((facilityA, facilityB) =>
        facilityA.name > facilityB.name ? 1 : -1
      );

      let tagSet = new Set();

      responseArray.forEach((facility) => {
        facility.tags.forEach((tag) => {
          tagSet.add(tag.name);
        });
      });

      setFacilitiesTags(Array.from(tagSet).sort());
      setFacilitiesList(responseArray);
      setFilteredFacilities(responseArray);
    });

    axios.get("http://localhost:3002/activities").then((response) => {
      let responseArray = response.data.data;
      console.log(responseArray);
      setActivitiesList(responseArray);
    });
  }, []);

  return (
    <div className="App">
      {" "}
      <NavBar></NavBar>
      <Facilities></Facilities>
    </div>
  );
}

export default App;
