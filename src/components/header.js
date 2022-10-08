
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
import style from './comps.module.scss'


let pages;
const productsLink = <div className={style.navcontainer}>
  <Link href='/shop'><a className={style.links}> Gems and Minerals</a></Link>
            <Link href='/shop'>
            <a className={style.links}>
                Fossils and Specimen
              </a>
            </Link>
            <Link href='/'>
            <a className={style.links}>
                Lamps and Trees
              </a>
            </Link>
            
            <Link href='/'>
              <a className={style.links}>
                Keepsake Boxes
              </a>
            </Link>
            
            <Link href='/'>
              <a className={style.links}>
                Accessories 
              </a>
            </Link>
            
          <Link href='/profile'>
            <a>Login </a>
          </Link>
          </div>;

const pagesLoggedOut = [productsLink];
const pagesLoggedIn = [productsLink, 'My Orders'];

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
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar className={style.header}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/'>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <DiamondIcon />
              </Button>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
