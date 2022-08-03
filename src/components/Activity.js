import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    color: "#3A3A3A",
    display: "flex",
    flexDirection: "column",
    padding: "3px",
    width: "20rem",
    height: "5rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "0.2rem",
    borderColor: "#808080",
    marginLeft: "8px",
  },
  location: { fontSize: "0.8rem" },
});

function Activity(props) {
  const classes = useStyles();
  return (
    <div data-testid="activity" className={classes.container}>
      <div data-testid="activity-name-and-level">
        {props.activity.name} ({props.activity.level})
      </div>
      <div className={classes.location} data-testid="activity-location">
        Location: {props.activity.location}
      </div>
      <div data-testid="activity-start-end">
        {props.activity.start_time} - {props.activity.end_time}
      </div>
    </div>
  );
}

export default Activity;
