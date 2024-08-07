import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//styles
import styles from "./NavBar.module.css";

//icons
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsNavOpen = () => setIsOpen((prev) => !prev);

  return (
    <Navbar as={"nav"} expand="md" className={styles["nav-wrapper"]}>
      <Container>
        <button
          onClick={handleIsNavOpen}
          aria-expanded={isOpen}
          className={`d-flex justify-content-center align-items-center p-1 rounded border text-light pointer h4 m-0 d-block d-md-none  ${
            isOpen && "mb-3"
          }`}
        >
          <HiMiniBars3CenterLeft aria-controls="basic-navbar-nav" />
        </button>
        <Navbar.Collapse in={isOpen} id="basic-navbar-nav ">
          <Nav
            className={`${styles.nav}  align-items-start align-items-md-center`}
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav
            className={`ms-auto ${styles.nav}  align-items-start align-items-md-center`}
          >
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
