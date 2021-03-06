// MATERIAL UI COMPONENTS
import { Grid, Typography } from "@mui/material";

// IMAGES
import home from "../../images/hello.svg";

const Home = () => {
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
        <img src={home} width={"70%"} />
      </Grid>
    </Grid>
  );
};

export default Home;
