import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DrawerComp from "../Drawer/DrawerComp";
import "./nav.css";
import Logo from "../../assets/logo/logo.png";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const path=useLocation()
  const loc=path.pathname;
  console.log(loc);
function isActive(){
  if (loc === "/") {
    setValue(0)
  }else if(loc === "/tentangsaya"){
    setValue(1)
  }else if(loc === "/karya"){
    setValue(2)
  }else if(loc === "/kontak"){
    setValue(3)
  }
}
useEffect(()=>{
  isActive();
}
,[loc])

  console.log(value);
  return (
    <AppBar position="fixed" color="" >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={Logo} alt="" srcset="" width="30" heigth="30" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="myname"
        >
          ReyhanDiansa
        </Typography>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <Stack direction="row" spacing={2} >
            <Tabs
              value={value}
              textColor="inherit"
              TabIndicatorProps={{style: {background:'#ff6f01'}}}
              onChange={(e, value) => setValue(value)}
            >
              <Tab
                label="Beranda"
                component={Link}
                to="/"
                sx={{textDecoration:"none",color: value === 0 ? "#ff6f01" : "black"}}
              />
              <Tab
                label="About me"
                component={Link}
                to="/tentangsaya"
                sx={{textDecoration:"none", color: value === 1 ? "#ff6f01" : "black"}}
              />
             <Tab
                label="Karya"
                component={Link}
                to="/karya"
                sx={{textDecoration:"none", color: value === 2 ? "#ff6f01" : "black"}}
              />
              <Tab
                label="Kontak"
                component={Link}
                to="/kontak"
                sx={{textDecoration:"none", color: value === 3 ? "#ff6f01" : "black"}}
              />
            </Tabs>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
