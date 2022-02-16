import { Button, Container, Grid } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Student = () => {
  return (
    <Grid container alignItems="center" style={{ height: "100%" }}>
      <Grid item sm={1} md={1} lg={1}>
        <Button
          style={{ height: "100%", width: "100%" }}
          // onClick={() => redirectTo(props.id)}
        >
          <ArrowBackIosIcon />
        </Button>
      </Grid>
      <Grid
        item
        container
        sm={10}
        md={10}
        lg={10}
        style={{ height: "100%", padding: "3rem 0" }}
      >
        <Grid container>
          <Grid item md={3} lg={3}>
            Image
          </Grid>
          <Grid item md={9} lg={9}>
            Basic Information
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={1} md={1} lg={1}>
        <Button
          style={{ height: "100%", width: "100%" }}
          // onClick={() => redirectTo(props.id)}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Student;
