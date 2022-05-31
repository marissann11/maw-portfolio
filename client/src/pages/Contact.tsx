import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";
import { useSnackbar, VariantType } from "notistack";

import { TextField, Button, Box, Stack, styled } from "@mui/material";
import "./styles/contact.scss";

import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  let successSnackbar: (variant: VariantType) => void;
  let errorSnackbar: (variant: VariantType) => void;

  successSnackbar = (variant: VariantType) => () => {
    enqueueSnackbar("Your email has been sent!", { variant });
  };

  errorSnackbar = (variant: VariantType) => () => {
    enqueueSnackbar("Your email failed to send", { variant });
  };

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
      successSnackbar("success");
      setPhone("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
      errorSnackbar("error");
    }
  };

  return (
    <animated.main style={mainSpring}>
      <NavComponent />
      <div className="contact">
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
        <div className="contactText">
          <h1>Let's Talk!</h1>
          <p>
            Whether you'd like to work together, <br />
            like for me to work for you, or just want to chat, <br />
            shoot me a message!
          </p>
        </div>
      </div>

      <HomeComponent />
    </animated.main>
  );
};

export default ContactPage;
