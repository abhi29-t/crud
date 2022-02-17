import { Student } from "../../Types/students";

export type StudentsState = {
  loading: boolean;
  error: null | string;
  studentsData: Student[];
  selectedStudent: Student | null;
  totalStudents: number;
};
