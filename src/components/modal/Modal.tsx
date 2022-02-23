import React from "react";

// MATERIAL UI COMPONENTS
import { Button } from "@mui/material";

// CUSTOM STYLES
import classes from "./Modal.module.css";

type Props = {
  title: string;
  message: string;
  onClick: () => void;
  onCancel: () => void;
};

const Modal: React.FC<Props> = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </div>
  );
};

export default Modal;
