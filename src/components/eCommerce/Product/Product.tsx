import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/reduxHooks";
import { addToCart } from "@store/cartSlice/cartSlice";
import {
  addToWishList,
  deleteFromWishList,
} from "@store/wishList/WishListSlice";

import { Spinner } from "react-bootstrap";

import { TProductsRecords } from "@types";

//icons
import { BsCartPlusFill } from "react-icons/bs";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { TbHeart, TbHeartFilled } from "react-icons/tb";

//styles
import styles from "./styles.module.css";

const {
  product_img,
  product_card,
  add_to_cart_btn,
  product_quantity,
  img_wrapper,
  product_title,
} = styles;

const Product = ({
  title,
  cat_prefix,
  price,
  img,
  id,
  max,
  quantity,
  isInWishList,
}: TProductsRecords & { isInWishList: boolean }) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const maxRemainingQuantity = max - (quantity ?? 0);
  const isMaxQuantityReached = Boolean(!maxRemainingQuantity);

  useEffect(() => {
    if (!isBtnDisabled) return;

    const debounce = setTimeout(() => setIsBtnDisabled(false), 800);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const handleAddToCartClicked = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };

  const handleLikeBtnClicked = () => {
    if (isInWishList) {
      dispatch(deleteFromWishList(id));
    } else {
      dispatch(addToWishList(id));
    }
  };

  return (
    <div className={`${product_card}`}>
      <div className="px-3 pt-4 pb-3">
        <h2 title={title} className={`h5 ${product_title}`}>
          {title}
        </h2>
        <h3 className="h6">Category : {cat_prefix}</h3>
        <h4 className="h6">price : {parseFloat(price).toFixed(2)} EGP</h4>
        <h5
          className={`m-0 d-flex align-items-center gap-1 ${product_quantity}`}
        >
          {isMaxQuantityReached ? (
            <span className="text-warning">
              <CiWarning className=" fs-5 mb-1" /> You reached the limit
            </span>
          ) : (
            <>
              <MdOutlineSpeakerNotes className="fs-5 " />
              You can add ({maxRemainingQuantity}) item
            </>
          )}
        </h5>
      </div>
      <div className={img_wrapper}>
        <img className={product_img} src={img} alt={title} />
        <span onClick={handleLikeBtnClicked} className="pointer">
          {isInWishList ? (
            <TbHeartFilled className="" />
          ) : (
            <TbHeart className="" />
          )}
        </span>
      </div>
      <button
        disabled={isBtnDisabled || isMaxQuantityReached}
        onClick={handleAddToCartClicked}
        className={`w-100 rounded-0 ${add_to_cart_btn}`}
      >
        {isBtnDisabled ? (
          <>
            loading ... <Spinner animation="border" size="sm" />
          </>
        ) : (
          <>
            Add To Cart <BsCartPlusFill className="h4 m-0" />
          </>
        )}
      </button>
    </div>
  );
};

export default memo(Product);
