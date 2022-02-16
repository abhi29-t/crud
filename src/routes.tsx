import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

// Components
import Home from "./pages/home";
import Students from "./pages/students-list/Students";
import Student from "./pages/student";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <div>
      <RouterRoutes>
        <Route path="/home" element={<Home />} />
        <Route path="/docs" element={<Students />} />
        <Route path="/doc-:documentID" element={<Student />} />
        <Route path="/not_found" element={<NotFound />} />

        {/* Usual */}
        <Route path="*" element={<Navigate replace to={"/not_found"} />} />
        <Route path="/" element={<Navigate replace to={"/home"} />} />
      </RouterRoutes>
    </div>
  );
};

export default Routes;
