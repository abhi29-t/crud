import { Button } from "@mui/material";
import React from "react";

// CUSTOM STYLES
import { useStyles } from "./Pagination.style";

type Args = {
  studentsPerPage: number;
  totalStudents: number;
  paginate: (num: number) => void;
  activePage: number;
};

const Pagination: React.FC<Args> = ({
  studentsPerPage,
  totalStudents,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <ul className={classes.ul}>
        <li className={classes.action}>
          <Button>Prev</Button>
        </li>{" "}
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={activePage === num ? classes.active : classes.li}
          >
            <Button onClick={() => paginate(num)}>{num}</Button>
          </li>
        ))}{" "}
        <li className={classes.action}>
          <Button>Next</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
