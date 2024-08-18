import { useEffect, useState } from "react";
import { useAppSelector } from "@hooks/reduxHooks";
import { calcWishListQuantity } from "@store/wishList/WishListSlice";

//icons
import { BsBagHeart } from "react-icons/bs";

//styles
import styles from "./styles.module.css";
const { wish_list_quantity } = styles;

const WishListIndicator = () => {
  const WishListQuantity = useAppSelector(calcWishListQuantity);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setIsAnimate(true);
    const timeOut = setTimeout(() => setIsAnimate(false), 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [WishListQuantity]);

  return (
    <div className="d-flex align-items-center gap-2 text-light px-2 border-2 border-end">
      <div className={`position-relative indicator-with-absolute-counter  ${wish_list_quantity}`}>
        <BsBagHeart className="fs-4 pointer text-danger" />
        {WishListQuantity !== 0 && (
          <span className={`${isAnimate && " pump_animate "}`}>
            {WishListQuantity}
          </span>
        )}
      </div>
      <span>Wishlist</span>
    </div>
  );
};

export default WishListIndicator;
