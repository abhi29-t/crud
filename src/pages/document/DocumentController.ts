import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// CUSTOM HOOKS
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";

const DocumentController = () => {
  const {
    loading,
    error,
    totalStudents,
    selectedStudent: currentStudent,
  } = useTypedSelector((state) => state.studentsRecord);
  const params = useParams();
  const navigate = useNavigate();
  const { get_StudentDetails } = useActions();

  const nextStudent = (id: number = 2) => {
    navigate(`/doc-${id + 1}`);
    get_StudentDetails(id + 1);
  };

  const previousStudent = (id: number = 2) => {
    navigate(`/doc-${id - 1}`);
    get_StudentDetails(id - 1);
  };

  useEffect(() => {
    if (params.docID) get_StudentDetails(+params.docID);
  }, []);
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
