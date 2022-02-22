import React, { useState } from "react";
import { Form, Formik } from "formik";

// MATERIAL UI COMPONENTS
import {
  Button,
  FormControl,
  Box,
  Drawer,
  CssBaseline,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// STYLE FILE
import { drawerWidth, useStyles } from "./DocumentDrawer.style";

// CUSTOM HOOKS
import useActions from "../../../hooks/useActions";
import DocumentDrawerController from "./DocumentDrawerController";
import { Student } from "../../../Types/students";

type Args = {
  drawerFor: string;
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  data: string | Student;
};

const DocumentDrawer: React.FC<Args> = (props) => {
  const { formikInitialValues, formikSubmitHandler, formikValidationSchema } =
    DocumentDrawerController(props);

  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.openDrawer}
      >
        <Box style={{ padding: "3rem 1.5rem" }}>
          <header className={classes.header}>
            <Typography>
              {props.drawerFor === "update" ? "Update" : "Add"}
            </Typography>
            <Button onClick={() => props.setOpenDrawer(false)} component="span">
              <CloseIcon />
            </Button>
          </header>

          <Formik
            initialValues={formikInitialValues}
            validationSchema={formikValidationSchema}
            onSubmit={formikSubmitHandler}
            enableReinitialize
          >
            {({
              handleChange,
              values,
              handleReset,
              handleSubmit,
              errors,
              touched,
              dirty,
              isValid,
            }) => (
              <Form>
                <TextField
                  label="First Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"first_name"}
                  value={values.first_name}
                  onChange={handleChange}
                  error={!!errors.first_name && !!touched.first_name}
                  helperText={
                    !!errors.first_name &&
                    !!touched.first_name &&
                    errors.first_name
                  }
                />
                <TextField
                  label="Last Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"last_name"}
                  value={values.last_name}
                  onChange={handleChange}
                  error={!!errors.last_name && !!touched.last_name}
                  helperText={
                    !!errors.last_name &&
                    !!touched.last_name &&
                    errors.last_name
                  }
                />
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Gender
                  </InputLabel>
                  <Select
                    label="Gender"
                    id="demo-simple-select-helper"
                    labelId="demo-simple-select-helper-label"
                    name={"gender"}
                    value={values.gender}
                    onChange={handleChange}
                    error={!!errors.gender && !!touched.gender}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Email"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"email"}
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email && !!touched.email}
                  helperText={!!errors.email && !!touched.email && errors.email}
                />
                <TextField
                  label="Birth year"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"birth_year"}
                  value={values.birth_year}
                  onChange={handleChange}
                  error={!!errors.birth_year && !!touched.birth_year}
                  helperText={
                    !!errors.birth_year &&
                    !!touched.birth_year &&
                    errors.birth_year
                  }
                />
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Athlete
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={values.sports_person}
                    label="Athlete"
                    name="sports_person"
                    onChange={handleChange}
                    error={!!errors.sports_person && !!touched.sports_person}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </FormControl>
                <footer className={classes.footer}>
                  <Button variant="outlined" onClick={() => handleReset()}>
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    disabled={!(dirty && isValid)}
                    onClick={() => handleSubmit()}
                  >
                    {props.drawerFor === "update" ? "Update" : "Add"}
                  </Button>
                </footer>
              </Form>
            )}
          </Formik>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DocumentDrawer;
