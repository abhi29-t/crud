import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const Drop = (props: { onClick: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const Backdrop = (props: { onClick: () => void }) => {
  return ReactDOM.createPortal(
    <Drop onClick={props.onClick} />,
    document.getElementById("backdrop-root") as Element
  );
};

export default Backdrop;
