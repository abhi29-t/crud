import React from "react";
import { Link, useLocation } from "react-router-dom";

// MATERIAL UI COMPONENTS
import { Grid, Typography, Box } from "@mui/material";

const Home = () => {
  const location = useLocation();
  console.log("navigate", location);
  return (
    <Grid
      container
      style={{ height: "100%", width: "100%" }}
      justifyContent="space-evenly"
      alignItems={"center"}
      direction="row"
    >
      <Grid item lg={6} sm={5} sx={{ p: 2 }} alignContent="flex-end">
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Home
        </Typography>
      </Grid>
      <Grid item lg={6} sm={7} sx={{ p: 2 }}>
        <img src="./images/hello.svg" width={"70%"} />
      </Grid>
    </Grid>
  );
};

export default Home;
