// MATERIAL UI COMPONENTS
import { Button, Grid, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import ScoreIcon from "@mui/icons-material/Score";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import WcIcon from "@mui/icons-material/Wc";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

// COMPONENTS
import Loader from "../../components/Loader";
import DocumentController from "./DocumentController";

// CUSTOM STYLES
import { useStyles } from "./Document.style";

const Document = () => {
  const {
    error,
    loading,
    totalStudents,
    currentStudent,
    nextStudent,
    previousStudent,
  } = DocumentController();
  const classes = useStyles();
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {error && <div>{error}</div>}
      {currentStudent && !error && (
        <Grid container alignItems="center" style={{ height: "100%" }}>
          {/* -------------------------------------------------------------------------------------------------- */}
          <Grid item sm={1} md={1} lg={1}>
            <Button
              style={{ height: "100%", width: "100%" }}
              disabled={currentStudent!.id - 1 === 0}
              onClick={() => previousStudent(currentStudent!.id)}
            >
              <ArrowBackIosIcon />
            </Button>
          </Grid>

          {/* -------------------------------------------------------------------------------------------------- */}
          <Grid
            item
            container
            sm={10}
            md={10}
            lg={10}
            justifyContent="space-evenly"
            className={classes.hero}
          >
            <Grid item md={6} lg={6} className={classes.imageContainer}>
              <img
                src={`https://source.unsplash.com/random/900×700/?face,${currentStudent?.gender}`}
                style={{ height: "100%", width: "100%" }}
                alt={`${currentStudent!.first_name} ${
                  currentStudent!.last_name
                }`}
              />
            </Grid>
            <Grid item md={6} lg={6} className={classes.detailsContainer}>
              <Box className={classes.upperDetails}>
                <Typography variant="h3">
                  {currentStudent!.first_name} {<br />}
                  {currentStudent!.last_name}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  {currentStudent?.email}
                </Typography>
              </Box>
              <Box className={classes.lowerDetails}>
                <Typography variant="h5">
                  <WcIcon /> Gender: {currentStudent.gender}{" "}
                  {currentStudent.gender === "Male" ? (
                    <MaleIcon />
                  ) : (
                    <FemaleIcon />
                  )}
                </Typography>
                <Typography variant="h5">
                  <BabyChangingStationIcon /> Birth year:{" "}
                  {currentStudent.birth_year}
                </Typography>
                <Typography variant="h5">
                  <SportsMartialArtsIcon /> Plays Sports:{" "}
                  {currentStudent.sports_person ? "Yes" : "No"}
                </Typography>
                <Typography variant="h5">
                  <ScoreIcon /> Marks Scored:{" "}
                  {Math.ceil(Math.random() * 93 + 7)} out of 100
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* -------------------------------------------------------------------------------------------------- */}
          <Grid item sm={1} md={1} lg={1}>
            <Button
              style={{ height: "100%", width: "100%" }}
              disabled={currentStudent!.id + 1 === totalStudents}
              onClick={() => nextStudent(currentStudent!.id)}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Document;
