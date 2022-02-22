import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Student } from "../../Types/students";
import DataNotFound from "../Common/DataNotFound";
import DocumentDrawer from "./document-drawer";
import DocumentRow from "./document-row";
import { Main } from "./Documents.style";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Documents = () => {
  //   const {} = StudentsController();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(5);
  const { fetch_studentsData } = useActions();
  const { loading, error, studentsData, totalStudents } = useTypedSelector(
    (state) => state.studentsRecord
  );
  useEffect(() => {
    setStudentsList(studentsData);
  }, [studentsData]);
  const [studentsList, setStudentsList] = useState<any>([]);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudentsToShow = studentsList.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const [sortBy, setSortBy] = useState("first_name");

  const handleSorting = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
    sorting(event.target.value as string);
  };

  const handleOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
    sorting(sortBy);
  };

  const [order, setOrder] = useState("asc");

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

  return (
    <Main>
      <Box sx={{ minWidth: 120 }}>
        <Typography>Sort By:</Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            // label="Sort By"
            onChange={handleSorting}
          >
            <MenuItem value={"first_name"}>First Name</MenuItem>
            <MenuItem value={"last_name"}>Last Name</MenuItem>
            <MenuItem value={"birth_year"}>Birth Year</MenuItem>
          </Select>
        </FormControl>
        <Typography>in</Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={order}
            // label="Sort By"
            onChange={handleOrder}
          >
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"dsc"}>Descending</MenuItem>
          </Select>
        </FormControl>

        <Typography>order</Typography>
      </Box>

      <Button onClick={() => setOpenDrawer(true)}>Add</Button>
      {currentStudentsToShow.length !== 0 &&
        currentStudentsToShow.map((student: Student) => (
          <DocumentRow
            key={student.id}
            id={student.id}
            birth_year={student.birth_year}
            email={student.email}
            first_name={student.first_name}
            gender={student.gender}
            image={student.image}
            last_name={student.last_name}
            sports_person={student.sports_person}
          />
        ))}
      {totalStudents !== 0 && (
        <Pagination
          studentsPerPage={studentsPerPage}
          totalStudents={totalStudents}
          paginate={paginate}
        />
      )}
      {loading && <Loader />}
      {error && <DataNotFound />}
      <DocumentDrawer
        drawerFor="add"
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        data={""}
      />
    </Main>
  );
};

export default Documents;
