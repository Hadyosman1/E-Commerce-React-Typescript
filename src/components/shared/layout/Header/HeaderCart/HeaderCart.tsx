import { useAppSelector } from "@hooks/reduxHooks";
import { calcCartItemsCount } from "@store/cartSlice/cartSlice";

//icons
import { BsCart4 } from "react-icons/bs";

//styles
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
const { cartCount, pump_animate } = styles;

const HeaderCart = () => {
  const cartItemsCount = useAppSelector(calcCartItemsCount);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (cartItemsCount <= 0) return;

    setIsAnimate(true);
    const debounce = setTimeout(() => setIsAnimate(false), 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [cartItemsCount]);

  return (
    <div className="d-flex align-items-end gap-1 text-light ">
      <div className={`position-relative ${cartCount}`}>
        <BsCart4 className="fs-4 pointer " />
        <span className={`${isAnimate && pump_animate}`}>{cartItemsCount}</span>
      </div>
      <span>Cart</span>
    </div>
  );
};

export default HeaderCart;
