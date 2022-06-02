import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface INavComponentProps {}

const NavComponent: React.FunctionComponent<INavComponentProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="nav">
      <AppBar position="static" color="transparent" className="navBar">
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link to="/about">[ 'About' ,</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/skills">'Skills' ,</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/portfolio">'Portfolio' ,</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/contact">'Contact' ]</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavComponent;
