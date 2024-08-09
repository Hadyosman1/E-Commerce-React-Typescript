import { Container } from "react-bootstrap";
import NavBar from "./HeaderCart/NavBar/NavBar";
import { useEffect, useRef } from "react";
import HeaderCart from "./HeaderCart/HeaderCart";

//styles
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const { header, logo } = styles;

const handleScroll = (element: HTMLDivElement | null) => {
  if (element == null) return;
  if (window.scrollY < 150) {
    element.classList.remove("bg-not-transparent");
    element.style.transform = "translate(0 , 0)";
  } else if (window.scrollY > 450) {
    element.classList.add("bg-not-transparent");
    element.style.transform = "translate(0 , 0)";
  } else {
    element.style.transform = "translate(0 , -100%)";
  }
};

const Header = () => {
  const navWrapperRef = useRef<HTMLDivElement>(null);

  const onScroll = () => handleScroll(navWrapperRef.current);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div id="my-header" ref={navWrapperRef}>
      <header className={`${header}`}>
        <Container>
          <div className="d-flex align-items-center">
            <h1 className={`m-0 h3 fw-bold ${logo}`}>
              <span>A</span>w<span>e</span>s<span>o</span>m<span>e</span>
            </h1>
            <div className="flex-grow-1"></div>
            <Link className="text-decoration-none" to="cart">
              <HeaderCart />
            </Link>
          </div>
        </Container>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
