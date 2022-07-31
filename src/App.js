import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { facilities } from "../src/states/FacilitiesAtom";
import NavBar from "./components/NavBar";
function App() {
  const [facilitiesList, setFacilitiesList] = useRecoilState(facilities);
  const [facilityTags, setFacilityTags] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/facilities").then((response) => {
      let responseArray = response.data.data;
      console.log(responseArray);

      responseArray.forEach((facility) => {
        console.log(facility.tags);
      });

      responseArray.sort((facilityA, facilityB) =>
        facilityA.name > facilityB.name ? 1 : -1
      );

      setFacilitiesList(responseArray);
    });
  }, []);

  return (
    <div className="App">
      {" "}
      This is a test <NavBar></NavBar>
    </div>
  );
}

export default App;
