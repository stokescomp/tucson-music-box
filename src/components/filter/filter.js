import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { FormControl } from "@mui/material";
import styles from "./styles.module.css";
import { useEffect } from "react";

function Filter(props) {
  const [checkboxesState, setCheckboxesState] = React.useState({
    gems: false,
    fossils: false,
    lamps: false,
    keepsake: false,
    accessories: false,
    misc: false,
  });
  useEffect(() => {
    // Update the document title using the browser API
    props.filter(checkboxesState);
  }, [checkboxesState]);
  const handleCheckChange = (e) => {
    setCheckboxesState({
      ...checkboxesState,
      [e.target.name]: e.target.checked,
    });
  };

  const { gems, fossils, lamps, keepsake, accessories, misc } = checkboxesState;
  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckChange}
                checked={gems}
                name="gems"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            }
            label="Gems and Min"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckChange}
                checked={fossils}
                name="fossils"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            }
            label="Fossils & Spec"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckChange}
                checked={lamps}
                name="lamps"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            }
            label="Lamps & Tress"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckChange}
                checked={keepsake}
                name="keepsake"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            }
            label="Keepsake Boxes"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckChange}
                checked={accessories}
                name="accessories"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            }
            label="Accessories"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckChange}
                name="misc"
                checked={misc}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            }
            label="Miscellaneous"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default Filter;
