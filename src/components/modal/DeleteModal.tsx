import React from "react";
import ReactDOM from "react-dom";

// CUSTOM COMPONENT
import Backdrop from "../backdrop";
import Modal from "./Modal";

type Props = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const DeleteModal: React.FC<Props> = (props) => {
  return (
    <>
      <Backdrop onClick={props.onConfirm} />
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClick={props.onConfirm}
          onCancel={props.onCancel}
        />,
        document.getElementById("overlay-root") as Element
      )}
    </>
  );
};

export default React.memo(DeleteModal);
