import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface ILandingNavComponentProps {}

const LandingNavComponent: React.FunctionComponent<
  ILandingNavComponentProps
> = (props) => {
  return (
    <Box sx={{ flexGrow: 0.5 }} className="landingNav">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <p> const navigation </p>
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            ={" "}
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/about">[ 'About' ,</Link>
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/skills">'Skills' ,</Link>
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/portfolio">'Portfolio' ,</Link>
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/contact">'Contact' ]</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LandingNavComponent;
