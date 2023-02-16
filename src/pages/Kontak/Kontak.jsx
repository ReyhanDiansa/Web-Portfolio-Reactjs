import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Alert } from "@mui/material";
import "./style.css";
import { alpha, styled } from '@mui/material/styles';
import Footer from "../../components/Footer/Footer";

const Kontak = () => {
  const [show, setShow] = useState(false);
  const [fail, setFail] = useState(false);

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#ff6f01',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff6f01',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#ff6f01',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff6f01',
      },
    },
  });
  function Succes() {
    if (show === true) {
      return (
        <>
          <Alert
            onClose={() => {
              setShow(false);
            }}
            className="alert"
          >
            Your Message Success to send
          </Alert>
        </>
      );
    }
  }

  function Failed() {
    if (fail === true) {
      return (
        <>
          <Alert
            onClose={() => {
              setFail(false);
            }}
            className="alert"
            severity="error"
          >
            Failed to send
          </Alert>
        </>
      );
    }
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_87erfcn",
        "template_naymhlu",
        e.target,
        "oy8OF6ZlXSyyWgxZf"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setShow(true);
        },

        (error) => {
          console.log(error.text);
          e.target.reset();
          setFail(true);
        }
      );
  }

  return (
    <>
      <h1 className="title-contact">
        Contact <span className="contact">Me</span>{" "}
      </h1>
      {Succes()}
      {Failed()}
      <form onSubmit={sendEmail} className="contact-form">
        <CssTextField  id="custom-css-outlined-input" name="name"
          label="Name"
          type="text"
          placeholder="your name"
          required />
          <CssTextField  id="custom-css-outlined-input" name="email"
          label="Email"
          type="text"
          placeholder="your email"
          required />
          <CssTextField  id="custom-css-outlined-input" name="message"
          label="Message"
          type="text"
          multiline
          rows={4}
          placeholder="your message"
          required />
        <button className="button-contact" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Kontak;
