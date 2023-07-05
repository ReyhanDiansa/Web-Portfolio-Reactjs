import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
import data from "./data.json";
// import cloud from "../../assets/images/cloud.png";
// import qr from "../../assets/images/qr.png";
// import quiz from "../../assets/images/quiz.png";
// import spp from "../../assets/images/spp.png";
// import vtour from "../../assets/images/vtour.png";
// import  hotel from "../../assets/images/hotel.png";
// import  konter from "../../assets/images/konter.png";

export default function Karya() {
  return (
    <>
      <h1 className="title-project">
        My <span className="project">Project</span>{" "}
      </h1>
      <div className="card-container">
        {data.map((item, index) => (
          <Card sx={{ width: 345, height: 360 }} className="card" key={index}>
            <CardMedia
              component="img"
              alt={item.alt}
              height="140"
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desk}
              </Typography>
            </CardContent>
            <CardActions className="button">
              {item.demo !== "null" && (
                <Button sx={{ color: "#ff6f01" }} size="small" href={item.demo}>
                 {item.title === "Virtual Tour SMK Telkom Malang"?"See Vtour":"Demo"}
                </Button>
              )}
              {item.see_code !== "null" && (  
              <Button
                sx={{ color: "#ff6f01" }}
                size="small"
                href={item.see_code}
              >
               See Code
              </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
