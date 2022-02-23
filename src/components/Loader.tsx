// MATERIAL UI COMPONENTS
import { CircularProgress } from "@mui/material";

// CUSTOM COMPONENTS
import Backdrop from "./backdrop";

const Loader = () => {
  return (
    <>
      <Backdrop onClick={() => {}} />
      <CircularProgress
        color="secondary"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    </>
  );
};

export default Loader;
