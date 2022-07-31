import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { facilitiesTags } from "../states/FacilitiesAtom";

function DropDown(props) {
  const handleChange = (event) => {
    props.setter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.currentTag}
          label="Tag"
          onChange={handleChange}
        >
          {props.tags.map((tag) => (
            <MenuItem value={tag}>{tag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown;
