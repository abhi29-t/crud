// MATERIAL UI COMPONENTS
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Grid,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";

// COMPONENTS
import DocumentRow from "./document-row";
import Loader from "../../components/Loader";
import DocumentDrawer from "./document-drawer";
import NoDataFound from "../Common/NoDataFound";
import Pagination from "../../components/pagination/Pagination";
import Backdrop from "../../components/backdrop";

// CONTROLLER
import DocumentsController from "./DocumentsController";

// CUSTOM STYLE
import { Main } from "./Documents.style";

// TYPES
import { Student } from "../../Types/students";

const Documents = () => {
  const {
    sortingOrder,
    error,
    sortBy,
    loading,
    openDrawer,
    currentPage,
    totalStudents,
    studentsPerPage,
    currentStudentsToShow,
    paginate,
    handleOrder,
    setOpenDrawer,
    handleSorting,
  } = DocumentsController();

  return (
    <Main>
      {loading && <Loader />}

      {/* If no data found */}
      {currentStudentsToShow.length === 0 && !loading && error && (
        <NoDataFound />
      )}

      {/* Sorting options*/}
      {!loading && currentStudentsToShow.length > 0 && (
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-between"
          style={{ marginBottom: "2rem" }}
        >
          <Box sx={{ minWidth: 120, display: "flex", alignItems: "center" }}>
            <Typography>Sort By:</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                onChange={handleSorting}
              >
                <MenuItem value={"first_name"}>First Name</MenuItem>
                <MenuItem value={"last_name"}>Last Name</MenuItem>
                <MenuItem value={"birth_year"}>Birth Year</MenuItem>
              </Select>
            </FormControl>
            <Typography>in</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortingOrder}
                onChange={handleOrder}
              >
                <MenuItem value={"asc"}>Ascending</MenuItem>
                <MenuItem value={"dsc"}>Descending</MenuItem>
              </Select>
            </FormControl>

            <Typography>order</Typography>
          </Box>

          <Button onClick={() => setOpenDrawer(true)}>Add</Button>
        </Grid>
      )}

      {/* Documents to show */}
      {currentStudentsToShow.length !== 0 &&
        currentStudentsToShow.map((student: Student, index: number) => (
          <DocumentRow
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

      {/* Pagination */}
      {currentStudentsToShow.length > 0 && (
        <Pagination
          studentsPerPage={studentsPerPage}
          totalStudents={totalStudents}
          paginate={paginate}
          activePage={currentPage}
        />
      )}

      {/* Drawer to add */}
      <DocumentDrawer
        drawerFor="add"
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        data={""}
      />

      {/* Backdrop on opening Drawer to add */}
      {openDrawer && <Backdrop onClick={() => setOpenDrawer(false)} />}
    </Main>
  );
};

export default Documents;
