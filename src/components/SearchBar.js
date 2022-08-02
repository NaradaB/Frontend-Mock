import TextField from "@mui/material/TextField";

function SearchBar(props) {
  return (
    <TextField
      style={{ marginLeft: "5px" }}
      id="outlined-basic"
      label={props.label}
      value={props.value}
      onChange={(event) => props.setter(event.target.value)}
      variant="outlined"
    />
  );
}

export default SearchBar;
