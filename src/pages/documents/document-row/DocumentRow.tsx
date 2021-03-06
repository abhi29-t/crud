import React from "react";

// MATERIAL UI COMPONENTS
import { Card, CardMedia, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

// CUSTOM STYLES
import { useStyles } from "./DocumentRow.style";

// IMPORT COMPONENT
import DocumentRowController from "./DocumentRowController";
import DocumentDrawer from "../document-drawer";
import Backdrop from "../../../components/backdrop";
import DeleteModal from "../../../components/modal/DeleteModal";

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
  const {
    openModal,
    openDrawer,
    redirectTo,
    setOpenModal,
    setOpenDrawer,
    remove_student,
  } = DocumentRowController();
  const classes = useStyles();

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
            <Typography className={classes.idText}>
              <span className={classes.idTextSmall}>Id:</span>
              {props.id}
            </Typography>
            <CardMedia
              component="img"
              image={`https://source.unsplash.com/random/900×700/?face,${props.gender}`}
              alt={`${props.first_name} ${props.last_name}`}
              style={{
                height: "100%",
                width: "8rem",
              }}
            />
          </Grid>
          <Grid item sm={7} md={8} lg={8} style={{ padding: "1.4rem" }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.first_name} {props.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Birth Year: {props.birth_year}
            </Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2} className={classes.actionButtons}>
            <Button onClick={() => setOpenModal(true)}>
              <DeleteSweepIcon />
            </Button>{" "}
            |{" "}
            <Button onClick={() => setOpenDrawer(true)}>
              <ModeEditIcon />
            </Button>{" "}
            |{" "}
            <Button onClick={() => redirectTo(`/doc-${props.id}`)}>
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

      {/* Backdrop on opening drawer to edit */}
      {openDrawer && <Backdrop onClick={() => setOpenDrawer(false)} />}

      {/* Delete confirmation model*/}
      {openModal && (
        <DeleteModal
          title="Are you sure?"
          message="Do you really want to delete this document?"
          onConfirm={() => {
            remove_student(props.id);
            setOpenModal(false);
          }}
          onCancel={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default DocumentRow;
