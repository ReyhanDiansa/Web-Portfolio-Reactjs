import React from "react";
import { Box } from "@mui/system";
import aboutpic from "../../assets/images/aboutpic.jpeg";
import "./style.css";
import { Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer from "../../components/Footer/Footer";

const TentangSaya = () => {
  return (
    <>
      <Box sx={{ display: "flex" }} className="about">
        <Box className="about-image">
          <img src={aboutpic} alt="" width="300" />
        </Box>
        <Box className="about-text">
          <h1>
            So, <span className="who">Who</span> am I ?
          </h1>
          <Typography variant="p" component="div" className="about-text-info">
            I am a young and enthusiastic programmer and a student of{" "}
            <span className="text-orange">SMK Telkom Malang</span>. I am honored
            to introduce myself through this portfolio website, where I will be
            showcasing my journey as a programmer and my projects. My passion
            for coding began at a young age, and it has only grown stronger over
            the years. I am fascinated by the limitless possibilities that
            coding offers, and I am always looking for new challenges and
            opportunities to improve my skills.
          </Typography>
          <Typography variant="p" component="div" className="about-text-info">
            I have learned various programming languages such as{" "}
            <span className="text-orange">Java, PHP, and Java Script</span>, and
            I have also been involved in various projects, both individually and
            in a team. My goal is to not only learn the fundamentals of
            programming but also to apply my knowledge to real-world problems
            and contribute to the growth of the technology industry. I believe
            that with my passion and dedication, I can make a difference in the
            world of coding. \ Thank you for visiting my page, and I look
            forward to sharing my journey with you.
          </Typography>
          <Box sx={{ display: "flex" }} className="icon">
            <div className="icon-wrap">
            <Box className="icon-button">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                href="https://www.instagram.com/reyhanmd._"
                className="icon-link"
                style={{
                  borderRadius: 50,
                  backgroundColor: "#fbcdab",
                  fontSize: "18px",
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box className="icon-button">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                style={{
                  borderRadius: 50,
                  backgroundColor: "#fbcdab",
                  fontSize: "18px",
                }}
                className="icon-link"
                href="https://www.github.com/ReyhanDiansa"
              >
                <GitHubIcon className="icon-comp" />
              </IconButton>
            </Box>
            </div>
            <div className="statistik">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ReyhanDiansa&layout=compact&theme=tokyonight&bg_color=rgba(255,111,1)"
                alt=""
              ></img>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TentangSaya;
