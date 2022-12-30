import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { firestore } from "../../../firebase"; // update with your path to firestore config
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { Snackbar, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useEffect, useState } from "react";
import { NoEncryption } from "@mui/icons-material";
import styles from "../product/styles.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const hideStyle = {
  display: "none"
}

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export default function TransitionsModalDelete(props) {
  const [toastOpen, setToastOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  // console.log("props", props)
  useEffect(() => {
    if (props.name) {
      // console.log(nameRef);
      //   nameRef.current.value = props.name;
    }
  }, []);

  const handleSubmitDelete = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("delete item:", data.get("id"))
    deleteDoc(doc(firestore, "products", data.get("id")));
    setToastOpen(true);
    handleCloseDelete();
  }

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastOpen(false);
  };

  return (
    <>
      <Snackbar
        open={toastOpen}
        autoHideDuration={6000}
        onClose={handleCloseToast}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{ width: "100%" }}
        >
          {props.success}
        </Alert>
      </Snackbar>
      <Button onClick={handleOpenDelete}><DeleteIcon className={styles.product__delete} /></Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDelete}
        onClose={handleCloseDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      > 
        <Fade in={openDelete}>
          <Box component="form" onSubmit={handleSubmitDelete} noValidate sx={style}>
            <React.Fragment>
              <h3>Delete Item</h3>
              <Typography variant="h6" gutterBottom>
                {props.replace}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}></Grid>
                <TextField sx={hideStyle}
                  id="id"
                  name="id"
                  value={props.id}
                />
                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained">
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
