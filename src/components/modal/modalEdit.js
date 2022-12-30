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
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { firestore } from "../../../firebase"; // update with your path to firestore config
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { Snackbar, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
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

export default function TransitionsModalEdit(props) {
  const [toastOpen, setToastOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [category, setCategory] = React.useState("");
  const nameRef = useRef();
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setDocCategory(event.target.value)
  };
  // console.log("props", props)
  let icon, buttonText;
  if (props.text == "edit") {
    icon = <EditIcon className={styles.product__edit} />;
    buttonText = "Update"
  } else {
    icon = props.text;
    buttonText = "Add"
  }
  useEffect(() => {
    if (props.name) {
      // console.log(nameRef);
      //   nameRef.current.value = props.name;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("data in object", data.get("name")
    , data.get("id")
    , data.get("description")
    , data.get("category")
    , data.get("discount")
    , data.get("color")
    , data.get("price")
    , data.get("imageUrl")
    )
    // console.log("data:", data)
    console.log("the item", {
      name: data.get("name"),
      color: data.get("color"),
      description: data.get("description"),
      imgUrl: data.get("imageUrl"),
      category: data.get("category"),
      discount: data.get("discount"),
      quantity: data.get("quantity"),
      price: data.get("price"),
    })
    if(buttonText == "Add")
      addDoc(collection(firestore, "products"), {
        name: data.get("name"),
        color: data.get("color"),
        description: data.get("description"),
        imgUrl: data.get("imageUrl"),
        category: data.get("category"),
        discount: data.get("discount"),
        quantity: data.get("quantity"),
        price: data.get("price"),
      });
    else {
      setDoc(doc(firestore, "products", data.get("id")), {
        name: data.get("name"),
        color: data.get("color"),
        description: data.get("description"),
        imgUrl: data.get("imageUrl"),
        category: data.get("category"),
        discount: data.get("discount"),
        quantity: data.get("quantity"),
        price: data.get("price"),
      });
    }
    setToastOpen(true);
    handleClose();
  };
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastOpen(false);
  };
  
  const [docName, setDocName] = useState(props.name);
  const [docColor, setDocColor] = useState(props.color);
  const [docDescription, setDocDescription] = useState(props.description);
  const [docImgUrl, setDocImgUrl] = useState(props.imgUrl);
  const [docCategory, setDocCategory] = useState(props.category);
  const [docDiscount, setDocDiscount] = useState(props.discount);
  const [docQuantity, setDocQuantity] = useState(props.quantity);
  const [docPrice, setDocPrice] = useState(props.price);

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
      <Button onClick={handleOpen} className={styles.add__button}>{icon}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      > 
        <Fade in={open}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={style}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                {props.replace}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    inputRef={nameRef}
                    id="name"
                    name="name"
                    label="Name"
                    onChange={(event) => setDocName(event.target.value)}
                    value={docName}
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="price"
                    name="price"
                    label="Price"
                    onChange={(event) => setDocPrice(event.target.value)}
                    value={docPrice}
                    fullWidth
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="description"
                    name="description"
                    label="Description"
                    onChange={(event) => setDocDescription(event.target.value)}
                    value={docDescription}
                    fullWidth
                    variant="standard"
                  />
                  <TextField sx={hideStyle}
                    id="id"
                    name="id"
                    value={props.id}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="imageUrl"
                    name="imageUrl"
                    label="image URL"
                    onChange={(event) => setDocImgUrl(event.target.value)}
                    value={docImgUrl}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="category"
                      value={docCategory}
                      label="Category"
                      onChange={handleCategoryChange}
                    >
                      <MenuItem value={"tiara"}>Tiara</MenuItem>
                      <MenuItem value={"minerals"}>Minerals</MenuItem>
                      <MenuItem value={"fossil"}>Fossil</MenuItem>
                      <MenuItem value={"box"}>Box</MenuItem>
                      <MenuItem value={"accesories"}>Accesories</MenuItem>
                      <MenuItem value={"gems"}>Gems</MenuItem>
                      <MenuItem value={"lamps"}>Lamps</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="discount"
                    name="discount"
                    label="Discount"
                    onChange={(event) => setDocDiscount(event.target.value)}
                    value={docDiscount}
                    fullWidth
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    onChange={(event) => setDocQuantity(event.target.value)}
                    value={docQuantity}
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="color"
                    name="color"
                    label="Color"
                    onChange={(event) => setDocColor(event.target.value)}
                    value={docColor}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained">
                    {buttonText}
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
