import {
  facilities,
  filteredFacilities,
  facilitiesTags,
  currentFacilityTag,
} from "../states/FacilitiesAtom";
import { facilityQuery } from "../states/FuseAtom";
import Fuse from "fuse.js";

import FacilityButton from "../components/FacilityButton";
import DropDown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import ClearButton from "../components/ClearButton";

import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "25rem",
    flexDirection: "column",
    marginTop: "50px",
    marginLeft: "10rem",
    borderRadius: "0.2rem",
    backgroundColor: "white",
    padding: "10px",
    paddingBottom: "20px",
  },
  filterWrapper: { display: "flex", flexDirection: "row", padding: "10px" },
  facilitiesWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: "'Josefin Sans', sans-serif",
    textAlign: "left",
    marginLeft: "1rem",
    color: "#8c59f8",
  },
});

function Facilities() {
  const classes = useStyles();

  const [facilitiesList, setFacilitiesList] = useRecoilState(facilities);
  const [filteredFacilitiesList, setFilteredFacilities] =
    useRecoilState(filteredFacilities);
  const [facilitiesTagsList, setFacilitiesTags] =
    useRecoilState(facilitiesTags);
  const [facilityTag, setCurrentFacilityTag] =
    useRecoilState(currentFacilityTag);

  const [facQuery, setFacilityQuery] = useRecoilState(facilityQuery);

  //Fuzzy search
  const options = {
    includeScore: true,
    threshold: 0.2,
    keys: ["name", "tags.name"],
  };

  //When dropdown is changed
  useEffect(() => {
    console.log("triggered");
    setFacilityQuery("");
    facilityTag.length === 0
      ? setFilteredFacilities(facilitiesList)
      : setFilteredFacilities(facilitiesList.filter(checkTags));
  }, [facilityTag]);

  useEffect(() => {
    if (facQuery.length === 0) {
      facilityTag.length === 0
        ? setFilteredFacilities(facilitiesList)
        : setCurrentFacilityTag(facilityTag);
      return;
    }

    let fuse;

    facilityTag.length === 0
      ? (fuse = new Fuse(facilitiesList, options))
      : (fuse = new Fuse(facilitiesList.filter(checkTags), options));

    const fuseResult = fuse.search(facQuery);

    setFilteredFacilities([]);

    fuseResult.forEach((result) => {
      setFilteredFacilities((filteredFacilitiesList) => [
        ...filteredFacilitiesList,
        result.item,
      ]);
    });
  }, [facQuery]);

  function checkTags(facility) {
    let tags = facility.tags;
    let contains = false;
    tags.forEach((tag) => {
      if (tag.name === facilityTag) {
        contains = true;
      }
    });

    return contains;
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>Facilities</div>
      <div className={classes.filterWrapper}>
        <ClearButton setter={setCurrentFacilityTag}></ClearButton>
        <DropDown
          tags={facilitiesTagsList}
          setter={setCurrentFacilityTag}
          currentTag={facilityTag}
        ></DropDown>
        <SearchBar
          setter={setFacilityQuery}
          label={"Facility Name"}
          value={facQuery}
        ></SearchBar>
      </div>
      <div className={classes.facilitiesWrapper}>
        {filteredFacilitiesList.map((facility) => (
          <FacilityButton facility={facility} />
        ))}
      </div>
    </div>
  );
}

export default Facilities;
