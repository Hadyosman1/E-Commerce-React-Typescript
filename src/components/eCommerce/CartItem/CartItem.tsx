import { memo } from "react";
import TProductsRecords from "@customTypes/productsTypes/productsRecordsType";
import { Button } from "react-bootstrap";
import { useAppDispatch } from "@hooks/reduxHooks";

import {
  decrementItemQuantity,
  incrementItemQuantity,
  deleteFromCart,
} from "@store/cartSlice/cartSlice";

//icons
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";

//styles
import styles from "./styles.module.css";
import { CiWarning } from "react-icons/ci";

const {
  cart_item,
  img_wrapper,
  cart_item_meta_data,
  quantity_controllers_wrapper,
  controllers,
  max_quantity,
} = styles;

const CartItem = ({
  id,
  img,
  max,
  price,
  title,
  cat_prefix,
  quantity,
}: TProductsRecords) => {
  const fixedPrice: number = +parseFloat(price).toFixed(2);
  const isBtnDisabled = (quantity ?? 0) >= max;
  const dispatch = useAppDispatch();

  console.log("render");
  return (
    <li className={`${cart_item}`}>
      <div className={`${img_wrapper}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${cart_item_meta_data}`}>
        <h3 className="h5">{title}</h3>
        <h4 className="h6 fw-normal">Category : {cat_prefix}</h4>
        <h4 className="h6 fw-normal">Price : {fixedPrice.toFixed(2)} EGP</h4>
        <h4 className="h6 fw-normal">
          Total Price : {(fixedPrice * (quantity ?? 0)).toFixed(2)} EGP
        </h4>
        <Button
          onClick={() => dispatch(deleteFromCart(id))}
          className="mt-auto"
          variant="danger"
          size="sm"
        >
          <BiTrash className="mb-1" /> Remove
        </Button>
      </div>
      <div
        className={`align-items-center align-items-lg-end ${quantity_controllers_wrapper}`}
      >
        <p className={max_quantity}>
          {isBtnDisabled ? (
            <span className="text-warning">
              <CiWarning className=" fs-5 mb-1" /> You reached the limit
            </span>
          ) : (
            `You can add maximum (${max}) items`
          )}
        </p>
        <div className={`${controllers}`}>
          <Button
            onClick={() => dispatch(decrementItemQuantity(id))}
            disabled={(quantity ?? 0) <= 1}
            className="mt-auto "
            variant="danger"
            size="sm"
          >
            <BiMinus />
          </Button>
          <span>{quantity}</span>
          <Button
            onClick={() => dispatch(incrementItemQuantity(id))}
            disabled={isBtnDisabled}
            className="mt-auto "
            variant="success"
            size="sm"
          >
            <BiPlus />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default memo(CartItem);
