import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// CUSTOM HOOKS
import useActions from "../../../hooks/useActions";

const DocumentRowController = () => {
  const redirectTo = useNavigate();
  const { remove_student } = useActions();
  const [openDrawer, setOpenDrawer] = useState(false);

  return { redirectTo, remove_student, openDrawer, setOpenDrawer };
};

export default DocumentRowController;
