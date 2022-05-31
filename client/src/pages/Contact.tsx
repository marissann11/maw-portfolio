import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";

import { TextField, Button, Box, Stack, styled } from "@mui/material";
import "./styles/contact.scss";

import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";
import ConfirmAlertComponent from "../components/ConfirmAlert";
import ErrorAlertComponent from "../components/ErrorAlert";

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  const CustomButton = styled(Button)({
    color: "#e9ab6d",
    border: "solid #e9ab6d 1px",
    marginTop: 10,
  }) as typeof Button;

  const mainSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const SERVICE_ID = "service_e8whnpj";
  const PUBLIC_KEY = "tuTUpwomSxQPam2OX";
  const TEMPLATE_ID = "template_y5antd9";

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitRequest = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: name,
          message: message,
          phone: phone,
          email: email,
        },
        PUBLIC_KEY
      );
      setPhone("");
      setName("");
      setEmail("");
      setMessage("");
      return <ConfirmAlertComponent />;
    } catch (err) {
      console.log(err);
      return <ErrorAlertComponent />;
    }
  };

  return (
    <animated.main style={mainSpring}>
      <div>
        <NavComponent />
        <Box
          className="contactBox"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "55ch" },
          }}
          autoComplete="off"
          onSubmit={submitRequest}
        >
          <Stack className="fields">
            <TextField
              className="field"
              required
              id="outlined-required"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <TextField
              className="field"
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              className="field"
              id="outlined"
              label="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <TextField
              className="field"
              required
              id="outlined-multiline-static"
              label="Your Message"
              multiline
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <CustomButton type="submit" size="large">
              Submit
            </CustomButton>
          </Stack>
        </Box>
      </div>
      <HomeComponent />
    </animated.main>
  );
};

export default ContactPage;
