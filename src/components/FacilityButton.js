import Button from "@mui/material/Button";
function FacilityButton(props) {
  return (
    <Button
      style={{
        maxWidth: "17rem",
        maxHeight: "50px",
        minWidth: "17rem",
        minHeight: "50px",
        marginTop: "10px",
      }}
      variant="outlined"
    >
      {props.name}
    </Button>
  );
}

export default FacilityButton;
