import React from "react";
import loading from "../assets/loading.gif";

const Spinner = () => {
  return (
    <div className="text-center" style={{ textAlign: "center" }}>
      <img className="img" height="100" src={loading} alt=".." />
    </div>
  );
};

export default Spinner;
