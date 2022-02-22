import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

// MATERIAL UI COMPONENTS
import { Box } from "@mui/material";

// Components
import Home from "./pages/home";
// import Students from "./pages/students-list/Students";
import Student from "./pages/student";
import PageNotFound from "./pages/Common/PageNotFound";
import Documents from "./pages/documents";

const Routes = () => {
  return (
    <Box style={{ height: "91%" }}>
      <RouterRoutes>
        <Route path="/home" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/doc-:docID" element={<Student />} />

        {/* Usual */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate replace to={"/home"} />} />

        {/* Spell Errors */}
        <Route
          path="/document"
          element={<Navigate replace to={"/documents"} />}
        />
      </RouterRoutes>
    </Box>
  );
};

export default Routes;
