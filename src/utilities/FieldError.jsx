import React from "react";

const FieldError = ({ errors }) => {
  return (
    <>
      {errors.map((error, i) => (
        <React.Fragment key={i}>
          {error}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default FieldError;
