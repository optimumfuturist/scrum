import React from "react";
import { Link } from "react-router-dom";

const Button = ({text, to}) => {
  return (
    <Link className="pushable" to={to}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{text}</span>
    </Link>
  );
}

const IconLink = ({className, children, to}) => {
  return (
    <Link className={className} to={to}>{children}</Link>
  );
}

export { Button, IconLink };