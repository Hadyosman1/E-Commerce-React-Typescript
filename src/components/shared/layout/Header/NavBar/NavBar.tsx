import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

//icons
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

//styles
import styles from "./NavBar.module.css";
const { nav_wrapper, nav } = styles;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsNavOpen = () => setIsOpen((prev) => !prev);

  return (
    <Navbar as={"nav"} expand="md" className={`${nav_wrapper}`}>
      <Container>
        <button
          onClick={handleIsNavOpen}
          aria-expanded={isOpen}
          className={`d-flex justify-content-center align-items-center p-1 rounded border text-light pointer h4 m-0 d-block d-md-none ${
            isOpen && "mb-3"
          } `}
        >
          <HiMiniBars3CenterLeft aria-controls="basic-navbar-nav" />
        </button>
        <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
          <Nav className={`${nav}  align-items-start align-items-md-center`}>
            <Nav.Link as={NavLink} to="/">
              <IoHomeOutline className="mb-1" /> Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categories">
              <TbCategory className="mb-1" /> Categories
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              <HiOutlineClipboardDocumentList className="mb-1" /> About
            </Nav.Link>
          </Nav>

          <Nav
            className={`ms-auto ${nav}  align-items-start align-items-md-center`}
          >
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
