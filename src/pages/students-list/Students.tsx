import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Student } from "../../Types/students";
import DataNotFound from "../DataNotFound";
import StudentDetails from "./studentDetails-container/StudentDetails";
import StudentsController from "./StudentsController";

const Students = () => {
  const {} = StudentsController();
  const { fetch_studentsData } = useActions();
  const { loading, error, studentsData, totalStudents } = useTypedSelector(
    (state) => state.studentsRecord
  );
  useEffect(() => {
    fetch_studentsData(1, 50);
    console.log("fetched");
  }, []);

  const [order, setOrder] = useState("asc");
  const [data, setData] = useState(studentsData);
  const sorting = (param: any) => {
    if (order === "asc") {
      const sorted = [...studentsData].sort((a: any, b: any) => {
        return a[param].toLowerCase() > b[param].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...studentsData].sort((a: any, b: any) => {
        return a[param].toLowerCase() < b[param].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("asc");
    }
  };

  const [studentsList, setStudentsList] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setPostsPerPage] = useState(5);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsList.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  console.log("page", currentPage);
  // const sortedData = studentsData.sort((a,b)=> )
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setStudentsList(data);
  }, [data]);
  return (
    <div>
      {/* {studentsData.length !== 0 &&
        studentsData.map((student: Student) => (
          <StudentDetails
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
        ))} */}
      <table>
        <thead>
          <tr>
            <th
              style={{ padding: "1.5rem" }}
              onClick={() => sorting("first_name")}
            >
              First name
            </th>
            <th
              style={{ padding: "1.5rem" }}
              onClick={() => sorting("last_name")}
            >
              Last Name
            </th>
            <th style={{ padding: "1.5rem" }} onClick={() => sorting("gender")}>
              Gender
            </th>
            <th style={{ padding: "1.5rem" }} onClick={() => sorting("email")}>
              Email
            </th>
          </tr>
        </thead>

        <tbody>
          {currentStudents.map((d, index) => (
            <tr key={index}>
              <td style={{ padding: "1.5rem" }}>{d.first_name}</td>
              <td style={{ padding: "1.5rem" }}>{d.last_name}</td>
              <td style={{ padding: "1.5rem" }}>{d.gender}</td>
              <td style={{ padding: "1.5rem" }}> {d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalStudents={totalStudents}
        studentsPerPage={studentsPerPage}
        paginate={paginate}
      />
      {loading && <Loader />}
      {error && <DataNotFound />}
    </div>
  );
};

export default Students;
