import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
import cloud from "../../assets/images/cloud.png";
import qr from "../../assets/images/qr.png";
import quiz from "../../assets/images/quiz.png";
import spp from "../../assets/images/spp.png";
import vtour from "../../assets/images/vtour.png";

export default function Karya() {
  return (
    <>
      <h1 className="title-project">
        My <span className="project">Project</span>{" "}
      </h1>
      <div className="card-container">
        <Card sx={{ width: 345, height: 360 }} className="card">
          <CardMedia
            component="img"
            alt="qr code generator"
            height="140"
            image={cloud}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Weather App adalah website menggunakan React js dan API dari
              OpenWeatherMap serta OpenStreetMap, website ini digunakan untuk
              melihat prakiraan cuaca terkini dari suatau daerah yang telah
              diinputkan.
            </Typography>
          </CardContent>
          <CardActions className="button">
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://idweather.vercel.app/"
            >
              Demo
            </Button>
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://github.com/ReyhanDiansa/Weather-App"
            >
              See Code
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 345, height: 360 }} className="card">
          <CardMedia
            component="img"
            alt="qr code generator"
            height="140"
            image={qr}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              QR Code Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              QR Code Generator adalah website menggunakan React js dan API dari
              goqr.me, website ini digunakan untuk membuat qr code berdasarkan
              url yang telah diinpitkan.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://qrgen-livid.vercel.app/"
            >
              Demo
            </Button>
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://github.com/ReyhanDiansa/Qr-Code-Generator"
            >
              See Code
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 345, height: 360 }} className="card">
          <CardMedia component="img" alt="quiz app" height="140" image={quiz} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quiz App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quiz App adalah website menggunakan Node js, ejs, dan Mongodb,
              website ini hanya dapat di run di local dan menggunakan database
              local.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://github.com/ReyhanDiansa/Quiz-App"
            >
              See Code
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 345, height: 360 }} className="card">
          <CardMedia component="img" alt="spp" height="140" image={spp} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPPku
            </Typography>
            <Typography variant="body2" color="text.secondary">
              SPPku adalah website pembayaran SPP untuk siswa dan input
              pembayaran oleh admin yang halamanya berbeda, website ini
              menggunakan PHP dan mysql yang hanya dapat di run di local dan
              menggunakan database local.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://github.com/ReyhanDiansa/UKL-SPP"
            >
              See Code
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 345, height: 360 }} className="card">
          <CardMedia component="img" alt="vtour" height="140" image={vtour} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Virtual Tour SMK Telkom Malang
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vtour Smk Telkom Malang, merupakan kumpulan gambar SMK Telkom Malang 360 derajat yang digabungkan sehingga bisa melakukan tur secara virtual. Vtour ini berbasis Website
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "#ff6f01" }}
              size="small"
              href="https://vtour.smktelkom-mlg.sch.id/"
            >
              See Vtour
            </Button>
          </CardActions>
        </Card>

        
      </div>
    </>
  );
}
