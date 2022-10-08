<<<<<<< HEAD
import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Checkbox from "@mui/material/Checkbox";
=======
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Checkbox from '@mui/material/Checkbox';
>>>>>>> d778855448a094fe15b6dc36e4f6b5f227134021

import styles from "./filterDrawer.module.css";
import { FormControlLabel, FormGroup } from "@mui/material";
import { handleClientScriptLoad } from "next/script";

const drawerBleeding = -50;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
<<<<<<< HEAD
  backgroundColor: theme.palette.mode === "light" ? "#354ace" : grey[800],
=======
  backgroundColor: theme.palette.mode === 'light' ? 'fff' : grey[800],
>>>>>>> d778855448a094fe15b6dc36e4f6b5f227134021
}));

function FilterDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [checkboxesState, setCheckboxesState] = React.useState({
    gems: false,
    fossils: false,
    lamps: false,
    keepsake: false,
    accesories: false,
    misc: false,
  });

  const handleCheckChange = (e) => {
    setCheckboxesState({
      ...checkboxesState,
      [e.target.name]: e.target.checked,
    });
  };

  React.useEffect(() => {
    // Update the document title using the browser API
    props.filter(checkboxesState);
  });
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { gems, fossils, lamps, keepsake, accessories, misc } = checkboxesState;

  return (
    <Root className={styles.filterDrawer__toggler}>
      <button onClick={toggleDrawer(true)}>Filters</button>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
<<<<<<< HEAD
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            Filters
=======
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            Categories
>>>>>>> d778855448a094fe15b6dc36e4f6b5f227134021
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <FormGroup className={styles.filterDrawer__filtersContainer}>
<<<<<<< HEAD
            <FormControlLabel
              control={
                <Checkbox
                  checked={gems}
                  onChange={handleCheckChange}
                  name="gems"
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={fossils}
                  onChange={handleCheckChange}
                  name="fossils"
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={lamps}
                  onChange={handleCheckChange}
                  name="lamps"
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={keepsake}
                  onChange={handleCheckChange}
                  name="keepsake"
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={accessories}
                  onChange={handleCheckChange}
                  name="accesories"
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={misc}
                  onChange={handleCheckChange}
                  name="misc"
                />
              }
              label="Label"
            />
=======
            <FormControlLabel control={<Checkbox />} label='Gems and Min' />
            <FormControlLabel control={<Checkbox />} label='Fossils & Spec' />
            <FormControlLabel control={<Checkbox />} label='Lamps & Tress' />
            <FormControlLabel control={<Checkbox />} label='Keepsake Boxes' />
            <FormControlLabel control={<Checkbox />} label='Accessories' />
            <FormControlLabel control={<Checkbox />} label='Miscellaneous' />
>>>>>>> d778855448a094fe15b6dc36e4f6b5f227134021
          </FormGroup>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

FilterDrawer.propTypes = {
  window: PropTypes.func,
};

export default FilterDrawer;
