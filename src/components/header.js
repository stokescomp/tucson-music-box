import Link from "next/link";
import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchUserInfo } from "../slices/userSlice";
import AdbIcon from "@mui/icons-material/Adb";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useRouter } from "next/router";

let pages;
const productsLink = <Link href="/shop">Products</Link>;

const pagesLoggedOut = [productsLink];
const pagesLoggedIn = [productsLink, "My Orders"];

export default function ButtonAppBar() {
  const userInfo = useSelector(fetchUserInfo);
  console.log(userInfo);
  if (userInfo) {
    pages = pagesLoggedIn;
  } else {
    pages = pagesLoggedOut;
  }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const router = useRouter();
  const handleCloseNavMenu = (e) => {
    if (e.target.textContent == "Products") {
      router.push("/shop");
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <DiamondIcon />
              </Button>
            </Link>
            <Link href="/contact">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contact
              </Button>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Link href="/profile">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
