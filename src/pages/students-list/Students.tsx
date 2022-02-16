import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import DataNotFound from "../DataNotFound";
import StudentDetails from "./studentDetails-container/StudentDetails";
import StudentsController from "./StudentsController";

const Students = () => {
  const {} = StudentsController();
  const {
    loading,
    error,
    studentsData: studentsList,
  } = useTypedSelector((state) => state.studentsRecord);
  return (
    <div>
      {!loading &&
        !error &&
        studentsList.length > 0 &&
        studentsList.map(
          (student: {
            id: number;
            birth_year: number;
            email: string;
            first_name: string;
            gender: string;
            image: string;
            last_name: string;
            sports_person: boolean;
          }) => (
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
          )
        )}
      {loading && <Loader />}
      {error && <DataNotFound />}
    </div>
  );
};

export default Students;
