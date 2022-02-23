import { useState } from "react";
import { useNavigate } from "react-router-dom";

// CUSTOM HOOKS
import useActions from "../../../hooks/useActions";

const DocumentRowController = () => {
  const redirectTo = useNavigate();
  const { remove_student } = useActions();
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return {
    openModal,
    openDrawer,
    redirectTo,
    setOpenModal,
    setOpenDrawer,
    remove_student,
  };
};

export default DocumentRowController;
