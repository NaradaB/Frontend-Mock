import Button from "@mui/material/Button";
import { createUseStyles } from "react-jss";
import { useRecoilState } from "recoil";
import { selectedFacility } from "../states/FacilitiesAtom";
import { activityQuery } from "../states/FuseAtom";
import {
  currentActivities,
  activities,
  currentActivityTag,
} from "../states/ActivitiesAtom";

const useStyles = createUseStyles({
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  tags: {
    fontSize: "0.75rem",
  },
});

function FacilityButton(props) {
  const classes = useStyles();

  const [, setSelectedFacility] = useRecoilState(selectedFacility);

  const [allActivities] = useRecoilState(activities);
  const [, setCurrentActivities] = useRecoilState(currentActivities);
  const [, setCurrentActivityTag] = useRecoilState(currentActivityTag);
  const [, setActivityQuery] = useRecoilState(activityQuery);

  const filterByFacility = () => {
    setCurrentActivityTag("");
    setCurrentActivities([]);
    allActivities.forEach((activity) => {
      if (activity.facility_id === props.facility.id) {
        setCurrentActivities((currActivities) => [...currActivities, activity]);
      }
    });
  };

  const returnTags = (tagArray) => tagArray.map((tag) => tag.name).join(" • ");

  return (
    <Button
      data-testid="facility-button"
      onClick={() => {
        setSelectedFacility(props.facility);
        setActivityQuery("");
        filterByFacility();
      }}
      style={{
        minWidth: "20rem",
        minHeight: "50px",
        marginTop: "10px",
        color: "#8c59f8",
        borderColor: "#8c59f8",
      }}
      variant="outlined"
    >
      <div className={classes.infoWrapper}>
        <div>{props.facility.name}</div>
        <div className={classes.tags}>{returnTags(props.facility.tags)}</div>
      </div>
    </Button>
  );
}

export default FacilityButton;
