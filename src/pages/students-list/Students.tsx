import React from "react";
import DetailBox from "./detail-Box/Detail-Box";
import StudentsController from "./StudentsController";

const Students = () => {
  const {} = StudentsController();
  return (
    <div>
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
    </div>
  );
};

export default Students;
