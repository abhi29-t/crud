import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <CircularProgress
      color="secondary"
      style={{ position: "absolute", top: "50%", left: "50%" }}
    />
  );
};

export default Loader;
