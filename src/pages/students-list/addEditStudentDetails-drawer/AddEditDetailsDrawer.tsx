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
} from "@mui/material";

// STYLE FILE
import { drawerWidth } from "./AddEditDetailsDrawer.style";

// CUSTOM HOOKS
import useActions from "../../../hooks/useActions";

type Args = {
  drawerFor: string;
};

const AddEditDetailsDrawer: React.FC<Args> = (props) => {
  const [open, setOpen] = useState(true);
  const { add_student, update_studentDetails } = useActions();

  // Related to Formik ------------------------------------------ //
  const formikSubmitHandler = (inputs: any) => {
    if (props.drawerFor === "update") {
      update_studentDetails(inputs);
    }
    if (props.drawerFor === "add") {
      add_student({ ...inputs, id: "", img: "" });
    }
  };

  const formikInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    sports_person: "",
    birth_year: "",
  };
  /* -------------------------Formik-------------------------------- */

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: 800,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            paddingRight: "1rem",
            paddingTop: "1rem",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div style={{ padding: "3rem 1.5rem" }}>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            component="span"
          >
            Close
          </Button>
          <Formik
            initialValues={formikInitialValues}
            onSubmit={formikSubmitHandler}
            enableReinitialize
          >
            {({ handleChange, values, handleReset, handleSubmit }) => (
              <Form>
                <TextField
                  label="First Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"first_name"}
                  value={values.first_name}
                  onChange={handleChange}
                />
                <TextField
                  label="Last Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"last_name"}
                  value={values.last_name}
                  onChange={handleChange}
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
                />
                <TextField
                  label="Birth year"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name={"birth_year"}
                  value={values.birth_year}
                  onChange={handleChange}
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
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </FormControl>
                <footer>
                  <Button variant="outlined" onClick={() => handleReset()}>
                    {props.drawerFor === "update" ? "Cancel" : "Reset"}
                  </Button>
                  <Button variant="contained" onClick={() => handleSubmit()}>
                    {props.drawerFor === "update" ? "Update" : "Add"}
                  </Button>
                </footer>
              </Form>
            )}
          </Formik>
        </div>
      </Drawer>
    </Box>
  );
};

export default AddEditDetailsDrawer;
