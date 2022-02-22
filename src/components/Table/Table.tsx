import * as React from "react";
import { useEffect, useState } from "react";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Student } from "../../Types/students";
import { CustomTablePagination, Root } from "./Table.style";

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const PaginatedTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { totalStudents, studentsData } = useTypedSelector(
    (state) => state.studentsRecord
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalStudents) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [order, setOrder] = useState("asc");
  const [data, setData] = useState(studentsData);

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
      setData(sorted);
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
      setData(sorted);
      setOrder("asc");
    }
  };

  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => sorting("first_name")}>First Name</th>
            <th onClick={() => sorting("last_name")}>Last Name</th>
            <th onClick={() => sorting("birth_year")}>Birth Year</th>
            <th onClick={() => sorting("gender")}>Gender</th>
            <th onClick={() => sorting("sports_person")}>Athlete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student: Student, index: number) => (
            <tr key={index}>
              <td style={{ width: "4rem", height: "4rem" }} align="right">
                <img
                  // src={`https://source.unsplash.com/random/900×700/?face,${student.gender}`}
                  style={{ height: "100%", width: "100%" }}
                  alt={`${student.first_name} ${student.last_name}`}
                />
              </td>
              <td style={{ width: "4rem", height: "4rem" }} align="right">
                {student.first_name}
              </td>
              <td style={{ width: "4rem", height: "4rem" }} align="right">
                {student.last_name}
              </td>
              <td style={{ width: "4rem", height: "4rem" }} align="right">
                {student.birth_year}
              </td>
              <td style={{ width: "4rem", height: "4rem" }} align="right">
                {student.gender}
              </td>
              <td style={{ width: "4rem", height: "4rem" }} align="right">
                {student.sports_person ? "Yes" : "No"}
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={totalStudents}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                } as any,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
};

export default PaginatedTable;
