import Button from "@mui/material/Button";

function ClearButton(props) {
  return (
    <Button
      data-testid="clear-button"
      onClick={() => {
        props.setter("");
      }}
      style={{
        borderColor: "#8c59f8",
        marginRight: "5px",
        color: "#8c59f8",
      }}
      variant="outlined"
    >
      Clear
    </Button>
  );
}

export default ClearButton;
