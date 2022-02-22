import React, { useState, useEffect } from "react";
import * as Yup from "yup";

// CUSTOM HOOKS
import useActions from "../../../hooks/useActions";

// TYPES
import { Student } from "../../../Types/students";

type Args = {
  drawerFor: string;
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  data: string | Student;
};

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  sports_person: "",
  birth_year: 1980,
  id: 0,
  image: "",
};

const DocumentDrawerController = (props: Args) => {
  const { add_student, update_studentDetails } = useActions();
  const [formikInitialValues, setFormikInitialValues] =
    useState<Student>(initialValues);

  const formikSubmitHandler = (inputs: any, { resetForm }: any) => {
    if (props.drawerFor === "update") {
      update_studentDetails(inputs);
    }
    if (props.drawerFor === "add") {
      add_student({ ...inputs, id: "", img: "" });
    }
    props.setOpenDrawer(false);
    resetForm();
  };

  const formikValidationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "Too short!")
      .max(30, "Too long!")
      .required("Required"),
    last_name: Yup.string()
      .min(2, "Too short!")
      .max(30, "Too long!")
      .required("Required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(50)
      .required("Required"),
    gender: Yup.string()
      .min(2, "Too short!")
      .max(30, "Too long!")
      .required("Required"),
    sports_person: Yup.string()
      .min(2, "Too short!")
      .max(30, "Too long!")
      .required("Required"),
    birth_year: Yup.number()
      .min(1980, "Too old!")
      .max(2004, "Too young!")
      .required("Required"),
  });

  useEffect(() => {
    if (typeof props.data !== "string") {
      setFormikInitialValues({
        ...props.data,
        sports_person: props.data.sports_person ? "Yes" : "No",
      });
    }
  }, [props.data]);

  return { formikInitialValues, formikValidationSchema, formikSubmitHandler };
};

export default DocumentDrawerController;
