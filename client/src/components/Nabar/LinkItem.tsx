import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkItem = ({
  to,
  linkName,
  onClick,
}: {
  to: string;
  linkName: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <Nav.Link
        as={Link}
        style={{
          textDecoration: "none",
          color: "white",
          whiteSpace: "nowrap",
        }}
        to={to}
        onClick={onClick}
      >
        {linkName}
      </Nav.Link>
    </>
  );
};

export default LinkItem;
