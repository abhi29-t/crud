import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Student } from "../../Types/students";
import DataNotFound from "../DataNotFound";
import StudentDetails from "./studentDetails-container/StudentDetails";
import StudentsController from "./StudentsController";

const Students = () => {
  const {} = StudentsController();
  const { loading, error, studentsData } = useTypedSelector(
    (state) => state.studentsRecord
  );
  // const state = useSelector(state => state.stud)
  return (
    <div>
      {studentsData.length !== 0 &&
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
        ))}
      {loading && <Loader />}
      {error && <DataNotFound />}
    </div>
  );
};

export default Students;
