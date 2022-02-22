import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// MATERIAL UI COMPONENTS
import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// CUSTOM HOOKS
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";

// TYPES
import { Student as typeStudent } from "../../Types/students";

// COMPONENTS
import Loader from "../../components/Loader";

const Student = () => {
  const {
    loading,
    error,
    totalStudents,
    selectedStudent: currentStudent,
  } = useTypedSelector((state) => state.studentsRecord);
  const { get_StudentDetails } = useActions();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.docID) get_StudentDetails(+params.docID);
  }, []);

  // const currentStudent = studentsData!.find(
  //   (stud: typeStudent) => stud.id.toString() === params.docID
  // );
  const nextStudent = (id: number = 2) => {
    navigate(`/doc-${id + 1}`);
    get_StudentDetails(id + 1);
  };
  const previousStudent = (id: number = 2) => {
    navigate(`/doc-${id - 1}`);
  };
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
            style={{ height: "100%", padding: "3rem 0" }}
          >
            <Grid container direction="column" padding="0 2rem">
              <Grid item container padding="1.5rem 0">
                <Grid item md={3} lg={5}>
                  <img
                    // src={`https://source.unsplash.com/random/900×700/?face,${currentStudent?.gender}`}
                    style={{ height: "100%", width: "100%" }}
                    alt={`${currentStudent!.first_name} ${
                      currentStudent!.last_name
                    }`}
                  />
                </Grid>
                <Grid item md={9} lg={7} style={{ padding: "3rem 5rem" }}>
                  <Typography variant="h3">
                    {currentStudent!.first_name} {<br />}
                    {currentStudent!.last_name}
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
                    {currentStudent?.gender} &#124; {currentStudent?.birth_year}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>Other</Grid>
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

export default Student;
