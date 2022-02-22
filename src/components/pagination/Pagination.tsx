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
  const pagesPossible = Math.ceil(totalStudents / studentsPerPage);
  for (let i = 1; i <= pagesPossible; i++) {
    pageNumbers.push(i);
  }
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <ul className={classes.ul}>
        <li className={classes.action}>
          <Button
            disabled={activePage - 1 === 0}
            onClick={() => {
              if (activePage - 1 === 0) return;
              paginate(activePage - 1);
            }}
          >
            Prev
          </Button>
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
          <Button
            disabled={activePage + 1 === 0}
            onClick={() => {
              if (activePage + 1 === pagesPossible + 1) return;
              paginate(activePage + 1);
            }}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
