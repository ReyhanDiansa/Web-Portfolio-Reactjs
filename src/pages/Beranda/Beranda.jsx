import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import Shape1 from "../../assets/images/Ellipse 1.png";
import Me from "../../assets/images/reyhan3.png";
import TentangSaya from "../About me/TentangSaya";
import Karya from "../Karya/Karya";
import Kontak from "../Kontak/Kontak";
import Footer from "../../components/Footer/Footer";

const Beranda = () => {
  return (
    <>
      <Box sx={{ display: "flex" }} className="banner">
        <Box className="banner-text">
          <Typography variant="h2" component="div" className="banner-title">
            <span className="hello">Hello!!! </span>
            I’m Reyhan
            <Typography variant="h2" component="div" className="banner-title">
              Marsalino Diansa
            </Typography>
          </Typography>
          <Typography sx={{ marginTop: "1rem" }} className="banner-info">
            I am Engineering Student at SMK TELKOM MALANG,
          </Typography>
          <Typography className="banner-info">
            I am from Ngantang district.
          </Typography>
          <button className="banner-button">
            <Link to="/tentangsaya" className="banner-link" >
              About Me
            </Link>
          </button>
        </Box>
        <Box
          
          className="banner-image"
        >
          <div className="shape">
            <img
              src={Shape1}
              alt=""
              srcset=""
              className="shape-1"
              width="400"
              height="400"
            />
            <img src={Me} alt="" srcset="" className="me" width="330" />
          </div>
        </Box>
      </Box>
          <hr className="garis"/>

          <TentangSaya/>
           <hr className="garis"/>
          <Karya />
          <hr className="garis"/>
         <Kontak />
    </>
  );
};

export default Beranda;
