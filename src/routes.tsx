import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

// MATERIAL UI COMPONENTS
import { Box } from "@mui/material";

// Components
import Home from "./pages/home";
// import Students from "./pages/students-list/Students";
import Student from "./pages/student";
import NotFound from "./pages/Common/NotFound";
import Documents from "./pages/documents";

const Routes = () => {
  return (
    <Box style={{ height: "91%" }}>
      <RouterRoutes>
        <Route path="/home" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/doc-:studentID" element={<Student />} />
        <Route path="/not_found" element={<NotFound />} />

        {/* Usual */}
        {/* <Route path="*" element={<Navigate replace to={"/not_found"} />} /> */}
        <Route path="/" element={<Navigate replace to={"/home"} />} />
      </RouterRoutes>
    </Box>
  );
};

export default Routes;
