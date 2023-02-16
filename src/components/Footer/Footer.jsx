import React from "react";
import "./style.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import moment from "moment"

const Footer = () => {
    const year=moment().year()
  return (
    <footer>
      <Box className="icon-footer">
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            href="https://www.github.com/ReyhanDiansa"
          >
            <InstagramIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            href="https://www.github.com/ReyhanDiansa"
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            href="mailto:reyhandiansa@gmail.com"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>

      <Box className="nav-footer">
        <Typography>
            <Link to="/" className="footer-link">Beranda</Link>
        </Typography>
        <Typography>
            <Link to="/tentangsaya" className="footer-link">About me</Link>
        </Typography><Typography>
            <Link to="/karya" className="footer-link">Karya</Link>
        </Typography><Typography>
            <Link to="/kontak" className="footer-link">Kontak</Link>
        </Typography>
      </Box>
      <div className="copyright">
        Copyright © {year}
      </div>
    </footer>
  );
};

export default Footer;
