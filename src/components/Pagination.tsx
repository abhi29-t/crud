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
    <nav style={{ padding: "1rem" }}>
      <ul
        style={{ listStyle: "none", display: "flex", justifyContent: "center" }}
      >
        <li style={{ margin: "0 .5rem" }}>
          <button>Prev</button>
        </li>{" "}
        |
        {pageNumbers.map((num) => (
          <li key={num} style={{ margin: "0 .5rem" }}>
            <button onClick={() => paginate(num)}>{num}</button>
          </li>
        ))}{" "}
        |
        <li style={{ margin: "0 .5rem" }}>
          <button>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
