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
      <Card style={{ margin: ".5rem" }}>
        <Grid
          container
          direction="row"
          style={{ height: "7rem", margin: "auto" }}
          wrap="nowrap"
        >
          <Grid
            item
            container
            wrap="nowrap"
            alignItems={"center"}
            sm={3}
            md={2}
            lg={2}
          >
            <Typography
              style={{
                fontSize: "3.4rem",
                padding: "1rem",
                paddingRight: "1.5rem",
                color: "white",
                background: "black",
                height: "100%",
              }}
            >
              <span
                style={{
                  position: "relative",
                  fontSize: "1.2rem",
                  top: "-2.6rem",
                }}
              >
                Id:
              </span>
              {props.id}
            </Typography>
            <CardMedia
              component="img"
              // image={`https://source.unsplash.com/random/900×700/?face,${props.gender}`}
              image={`https://www.goe.com`}
              alt={`${props.first_name} ${props.last_name}`}
              style={{
                // marginRight: "1rem",
                height: "100%",
                width: "8rem",
              }}
            />
          </Grid>
          <Grid item sm={7} md={8} lg={8} style={{ padding: "1.6rem" }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.first_name} {props.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Birth Year: {props.birth_year}
            </Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2}>
            <Button
              style={{ height: "100%" }}
              onClick={() => remove_student(props.id)}
            >
              <DeleteSweepIcon />
            </Button>{" "}
            |
            <Button
              style={{ height: "100%" }}
              onClick={() => setOpenDrawer(true)}
            >
              <ModeEditIcon />
            </Button>
            |{" "}
            <Button
              style={{ height: "100%" }}
              onClick={() => redirectTo(`/doc-${props.id}`)}
            >
              <ArrowForwardIosIcon />
            </Button>
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
