import React, { useState, useEffect } from "react";
import useActions from "../../../hooks/useActions";
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
  birth_year: 0,
  id: 0,
  image: "",
};

const DocumentDrawerController = (props: Args) => {
  const { add_student, update_studentDetails } = useActions();
  const [formikInitialValues, setFormikInitialValues] =
    useState<Student>(initialValues);

  const formikSubmitHandler = (inputs: any) => {
    if (props.drawerFor === "update") {
      update_studentDetails(inputs);
    }
    if (props.drawerFor === "add") {
      add_student({ ...inputs, id: "", img: "" });
    }
    props.setOpenDrawer(false);
  };

  useEffect(() => {
    if (typeof props.data !== "string") {
      setFormikInitialValues({
        ...props.data,
        sports_person: props.data.sports_person ? "Yes" : "No",
      });
    }
  }, [props.data]);

  return { formikInitialValues, formikSubmitHandler };
};

export default DocumentDrawerController;
