import { useEffect, useRef } from "react";
import NavBar from "./NavBar/NavBar";
import HeaderIndicatorWithCounter from "./HeaderIndicatorWithCounter/HeaderIndicatorWithCounter";

import { calcCartItemsCount } from "@store/cartSlice/cartSlice";
import { calcWishListQuantity } from "@store/wishList/WishListSlice";

import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

//styles
import styles from "./Header.module.css";

//icons
import { BsBagHeart, BsCart4 } from "react-icons/bs";

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
          <div className="d-flex align-items-center gap-1">
            <h1 className={`m-0 h4 flex-shrink-1 fw-bold ${logo}`}>
              <span>A</span>w<span>e</span>s<span>o</span>m<span>e</span>
            </h1>
            <div className="flex-grow-1 d-flex justify-content-end  ">
              <Link
                className="text-decoration-none border-2 border-end"
                to="wish-list"
              >
                <HeaderIndicatorWithCounter
                  styleClass="wish-list-quantity"
                  quantityHandler={calcWishListQuantity}
                  Icon={<BsBagHeart className="fs-4 pointer text-danger" />}
                  title="WishList"
                />
              </Link>
              <Link className="text-decoration-none" to="cart">
                <HeaderIndicatorWithCounter
                  styleClass="cart-count"
                  quantityHandler={calcCartItemsCount}
                  Icon={<BsCart4 className="fs-4 pointer" />}
                  title="Cart"
                />
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
