import React, { useState } from "react";
import classnames from "classnames";
import Element from "./Element";
import Structure from "./Structure";

const Container = ({ type, name, child, depth }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (type === "dir") {
      setOpen(!open);
    }
  };
  return (
    <div
      className={classnames(type, open && "open")}
      style={{ marginLeft: `${depth * 10}px` }}
    >
      <Element name={name} onClick={handleOpen} />
      {open && type === "dir" && (
        <Structure child={child} name={name} depth={depth++} />
      )}
    </div>
  );
};

export default Container;
