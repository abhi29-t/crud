import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

// Components
import Home from "./pages/home";
import List from "./pages/documents-list/List";
import Document from "./pages/document";

const Routes = () => {
  return (
    <div>
      <RouterRoutes>
        <Route path="/home" element={<Home />} />
        <Route path="/docs" element={<List />} />
        <Route path="/doc-:documentID" element={<Document />} />

        {/* Usual */}
        <Route path="*" element={<Navigate replace to={"/home"} />} />
        <Route path="/" element={<Navigate replace to={"/home"} />} />
      </RouterRoutes>
    </div>
  );
};

export default Routes;
