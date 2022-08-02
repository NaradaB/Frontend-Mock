import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "'Josefin Sans', sans-serif",
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
});

function Activity(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        {props.activity.name} ({props.activity.level})
      </div>
      <div>{props.activity.location}</div>
      <div>
        {props.activity.start_time} - {props.activity.end_time}
      </div>
    </div>
  );
}

export default Activity;
