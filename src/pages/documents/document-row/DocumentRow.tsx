import * as React from "react";
import { useNavigate } from "react-router-dom";

// MATERIAL UI COMPONENTS
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

// IMPORT COMPONENT
import DocumentRowController from "./DocumentRowController";
import DocumentDrawer from "../document-drawer";

type Args = {
  id: number;
  birth_year: number;
  email: string;
  first_name: string;
  gender: string;
  image: string;
  last_name: string;
  sports_person: boolean | string;
};

const DocumentRow: React.FC<Args> = (props) => {
  const { redirectTo, remove_student, openDrawer, setOpenDrawer } =
    DocumentRowController();
  return (
    <>
      <Card>
        <Grid
          container
          direction="row"
          style={{ width: "80%", margin: "auto" }}
        >
          <Grid item sm={3} md={2} lg={2}>
            <CardMedia
              component="img"
              height="140"
              // image={`https://source.unsplash.com/random/900×700/?face,${props.gender}`}
              image={`https://www.goe.com`}
              alt={`${props.first_name} ${props.last_name}`}
            />
          </Grid>
          <Grid item sm={8} md={9} lg={9}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.first_name} {props.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sex: {props.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Birth Year: {props.birth_year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {props.email}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item sm={1} md={1} lg={1}>
            {/* <Button
            style={{ height: "100%", width: "100%" }}
            onClick={() => remove_student(props.id)}
          >
            <DeleteSweepIcon />
          </Button> */}
            <Button
              style={{ height: "100%", width: "100%" }}
              onClick={() => setOpenDrawer(true)}
            >
              <ModeEditIcon />
            </Button>
            {/* <Button
            style={{ height: "100%", width: "100%" }}
            onClick={() => redirectTo(`/doc-${props.id}`)}
          >
            <ArrowForwardIosIcon />
          </Button> */}
          </Grid>
        </Grid>
      </Card>
      <DocumentDrawer
        drawerFor="update"
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        data={props}
      />
    </>
  );
};

export default DocumentRow;
