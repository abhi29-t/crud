import React, { useEffect } from "react";
import useActions from "../../hooks/useActions";

const StudentsController = () => {
  const { fetch_studentsData } = useActions();
  useEffect(() => {
    fetch_studentsData();
  }, []);
  return {};
};

export default StudentsController;
