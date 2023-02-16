import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const DrawerComp = () => {
  const [openDr, setOpenDr] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDr}
        onClose={() => setOpenDr(false)}
        PaperProps={{
          sx: { width: "40%" },
        }}
      >
        <List>
          <ListItemButton >
            <ListItemIcon>
              <ListItemText>
                <Button>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setOpenDr(false)}
                  >
                    Beranda
                  </Link>
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>
                <Button>
                  <Link
                    to="/karya"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setOpenDr(false)}
                  >
                    Karya
                  </Link>
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton >
            <ListItemText>
              <Button>
                <Link
                  to="/kontak"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => setOpenDr(false)}
                >
                  Kontak
                </Link>
              </Button>
            </ListItemText>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Button>
                  <Link
                    to="/tentangsaya"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setOpenDr(false)}
                  >
                    Tentang Saya
                  </Link>
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDr(!openDr)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
