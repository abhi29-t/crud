import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// CUSTOM HOOKS
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";

// TYPES
import { Student as typeStudent } from "../../Types/students";

const DocumentController = () => {
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

  const nextStudent = (id: number = 2) => {
    navigate(`/doc-${id + 1}`);
    get_StudentDetails(id + 1);
  };
  const previousStudent = (id: number = 2) => {
    navigate(`/doc-${id - 1}`);
    get_StudentDetails(id - 1);
  };
  return {
    error,
    loading,
    totalStudents,
    currentStudent,
    nextStudent,
    previousStudent,
  };
};

export default DocumentController;
