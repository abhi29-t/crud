import React from "react";
type Args = {
  studentsPerPage: number;
  totalStudents: number;
  paginate: (num: number) => void;
};
const Pagination: React.FC<Args> = ({
  studentsPerPage,
  totalStudents,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num}>
            <button onClick={() => paginate(num)}>{num}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
