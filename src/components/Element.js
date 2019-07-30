import React from "react";
const Eleemnt = ({ view, name, onClick }) => (
  <div className={view} onClick={onClick}>
    {name}
  </div>
);

export default Eleemnt;
