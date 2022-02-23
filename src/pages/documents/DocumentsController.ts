import { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Student } from "../../Types/students";

const DocumentsController = () => {
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("first_name");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsList, setStudentsList] = useState<any>([]);
  const [studentsPerPage, setStudentsPerPage] = useState(5);

  const { fetch_studentsData } = useActions();
  const { loading, error, studentsData, totalStudents } = useTypedSelector(
    (state) => state.studentsRecord
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudentsToShow = studentsList.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSorting = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
    sorting(event.target.value as string);
  };

  const handleOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
    sorting(sortBy);
  };

  const sorting = (param: string) => {
    if (order === "asc") {
      let sorted: Student[] = [];
      switch (param) {
        case "birth_year":
          sorted = [...studentsData].sort((a: any, b: any) => {
            return a[param] > b[param] ? 1 : -1;
          });
          break;
        case "sports_person":
          sorted = [...studentsData].sort((a: any, b: any) => {
            return a[param] > b[param] ? 1 : -1;
          });
          break;
        default:
          sorted = [...studentsData].sort((a: any, b: any) => {
            return a[param].toLowerCase() > b[param].toLowerCase() ? 1 : -1;
          });
          break;
      }
      setStudentsList(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      let sorted: Student[] = [];
      switch (param) {
        case "birth_year":
          sorted = [...studentsData].sort((a: any, b: any) => {
            return a[param] < b[param] ? 1 : -1;
          });
          break;
        case "sports_person":
          sorted = [...studentsData].sort((a: any, b: any) => {
            return a[param] < b[param] ? 1 : -1;
          });
          break;
        default:
          sorted = [...studentsData].sort((a: any, b: any) => {
            return a[param].toLowerCase() < b[param].toLowerCase() ? 1 : -1;
          });
          break;
      }
      setStudentsList(sorted);
      setOrder("asc");
    }
  };

  useEffect(() => {
    fetch_studentsData();
  }, []);

  useEffect(() => {
    setStudentsList(studentsData);
  }, [studentsData]);

  return {
    order,
    error,
    sortBy,
    loading,
    openDrawer,
    currentPage,
    totalStudents,
    studentsPerPage,
    currentStudentsToShow,
    paginate,
    handleOrder,
    setOpenDrawer,
    handleSorting,
  };
};

export default DocumentsController;
