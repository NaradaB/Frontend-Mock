import {
  facilities,
  filteredFacilities,
  facilitiesTags,
  currentFacilityTag,
  facilitySearch,
} from "../states/FacilitiesAtom";
import FacilityButton from "../components/FacilityButton";
import DropDown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import { RecoilRoot, useRecoilState } from "recoil";
import { useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "18rem",
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
  navLogo: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    marginLeft: "10px",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "1.5rem",
    color: "#222222",
    marginLeft: "10rem",
    cursor: "pointer",
    userSelect: "none",
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
  const [facilitySearchField, setFacilitySearchField] =
    useRecoilState(facilitySearch);

  useEffect(() => {
    console.log(facilityTag);
    let newArray = facilitiesList.filter(checkTags);
    console.log(newArray);
    setFilteredFacilities(newArray);
  }, [facilityTag]);

  useEffect(() => {
    console.log(facilitySearchField);
    console.log(facilityTag);
  }, [facilitySearchField]);

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
      <div className={classes.filterWrapper}>
        <DropDown
          tags={facilitiesTagsList}
          setter={setCurrentFacilityTag}
          currentTag={facilityTag}
        ></DropDown>
        <SearchBar setter={setFacilitySearchField}></SearchBar>
      </div>
      <div className={classes.facilitiesWrapper}>
        {filteredFacilitiesList.map((facility) => (
          <FacilityButton name={facility.name} />
        ))}
      </div>
    </div>
  );
}

export default Facilities;
