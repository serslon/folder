import React from "react";
import Container from "./Container";

const Structure = ({ child = [], name = "", depth = 1 }) =>
  child.map((elm, idx) => (
    <Container key={`uniq_${name}_${idx}`} {...elm} depth={depth} />
  ));

export default Structure;
