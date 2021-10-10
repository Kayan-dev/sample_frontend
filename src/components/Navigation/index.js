import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  return (
    <Navbar>
      <Nav className="ma-2 f4" style={{ width: "100%" }} fill>
        <NavbarItem path="/" linkText="Homepage" />
        <NavbarItem path="/samples" linkText="Sample Overview" />
        <NavbarItem path="/plates" linkText="Plate Overview" />
      </Nav>
    </Navbar>
  );
}
