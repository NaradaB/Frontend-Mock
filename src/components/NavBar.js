import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navBar: {
    backgroundColor: "white",
    width: "100%",
    height: "80px",
    margin: "0",
    // boxShadow: "0px 2px #666666",
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "1.5rem",
    color: "#8c59f8",
    marginLeft: "10rem",
    cursor: "pointer",
    userSelect: "none",
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <div className={classes.navLogo}> LOGO </div>
    </div>
  );
}

export default NavBar;
