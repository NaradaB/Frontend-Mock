import TextField from "@mui/material/TextField";
function SearchBar(props) {
  return (
    <TextField
      style={{ marginLeft: "5px" }}
      id="outlined-basic"
      label="Facility Name"
      onChange={(event) => props.setter(event.target.value)}
      variant="outlined"
    />
  );
}

export default SearchBar;
