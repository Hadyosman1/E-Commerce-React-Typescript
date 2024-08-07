import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { useEffect, useRef } from "react";

// icons
import { BsCart4 } from "react-icons/bs";

//styles
import styles from "./Header.module.css";
const { header, logo, cartCount } = styles;

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
      <header className={header}>
        <Container>
          <div className="d-flex align-items-center">
            {/* Logo */}
            <h1 className={`m-0 h3 fw-bold ${logo}`}>
              <span>A</span>w<span>e</span>s<span>o</span>m<span>e</span>
            </h1>
            {/* Logo */}
            <div className="flex-grow-1"></div>
            {/* Cart */}
            <div className={`position-relative ${cartCount}`}>
              <BsCart4 className="fs-4 pointer " />
              <span>12</span>
            </div>
            {/* Cart */}
          </div>
        </Container>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
