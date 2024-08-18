import { useEffect, useState } from "react";
import { useAppSelector } from "@hooks/reduxHooks";
import { calcCartItemsCount } from "@store/cartSlice/cartSlice";

//icons
import { BsCart4 } from "react-icons/bs";

//styles
import styles from "./styles.module.css";
const { cartCount } = styles;

const HeaderCart = () => {
  const cartItemsCount = useAppSelector(calcCartItemsCount);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setIsAnimate(true);
    const timeOut = setTimeout(() => setIsAnimate(false), 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [cartItemsCount]);

  return (
    <div className="d-flex align-items-center gap-1 text-light ps-2 ">
      <div className={`position-relative indicator-with-absolute-counter ${cartCount}`}>
        <BsCart4 className="fs-4 pointer " />
        {cartItemsCount !== 0 && (
          <span className={`${isAnimate && "pump_animate"}`}>
            {cartItemsCount}
          </span>
        )}
      </div>
      <span>Cart</span>
    </div>
  );
};

export default HeaderCart;
