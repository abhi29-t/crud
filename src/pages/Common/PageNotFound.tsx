import React from "react";
import { Link, useLocation } from "react-router-dom";

// MATERIAL UI COMPONENTS
import { Grid, Typography, Box } from "@mui/material";

// IMAGE
import notFoundImg from "../../images/not_found.svg";

const NotFound = () => {
  const location = useLocation();
  return (
    <Grid
      container
      style={{ height: "100%", width: "100%" }}
      justifyContent="space-evenly"
      alignItems={"center"}
      direction="row"
    >
      <Grid item lg={6} sm={7} sx={{ p: 2 }}>
        <img src={notFoundImg} width={"70%"} />
      </Grid>
      <Grid item lg={6} sm={5}>
        <Box>
          <Typography variant="h4" sx={{ p: 2 }}>
            Page not found
          </Typography>
          <Typography sx={{ p: 2 }}>
            Sorry, the page{" "}
            <mark style={{ backgroundColor: "rgb(191 196 232)" }}>
              {location.pathname}
            </mark>
            {"  "}
            could not be found.
          </Typography>
          <Typography sx={{ p: 2 }}>
            <Link to="/home">Go back to the Home page</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFound;
