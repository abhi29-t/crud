import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table/Table";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Student } from "../../Types/students";
import DataNotFound from "../DataNotFound";
import StudentDetails from "./studentDetails-container/StudentDetails";
import StudentsController from "./StudentsController";

const Students = () => {
  const {} = StudentsController();
  const { fetch_studentsData } = useActions();
  const { loading, error } = useTypedSelector((state) => state.studentsRecord);
  useEffect(() => {
    fetch_studentsData();
  }, []);

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
      {/* <table>
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
      </table> */}
      <Table />

      {loading && <Loader />}
      {error && <DataNotFound />}
    </div>
  );
};

export default Students;
