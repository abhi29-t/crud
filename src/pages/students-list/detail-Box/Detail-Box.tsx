import * as React from "react";

// MATERIAL UI COMPONENTS
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";

export default function DetailBox() {
  return (
    <Card>
      {/* <CardActionArea> */}
      <Grid container direction="row">
        <Grid item lg={2}>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random/900×700/?face"
            alt="green iguana"
          />
        </Grid>
        <Grid item lg={10}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Abhishek Tiwari
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class: 10th
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last school: Padmaja
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: '05, Indra Nagar, Dewas'
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      {/* </CardActionArea> */}
    </Card>
  );
}
