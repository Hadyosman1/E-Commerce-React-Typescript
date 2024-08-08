import TProductsRecords from "@customTypes/productsTypes/productsRecordsType";
import { useAppDispatch } from "@hooks/reduxHooks";
import { addToCart } from "@store/cartSlice/cartSlice";

//icons
import { BsCartPlusFill } from "react-icons/bs";

//styles
import styles from "./styles.module.css";
const { product_img, product_card, add_to_cart_btn } = styles;

const Product = ({
  title,
  cat_prefix,
  price,
  img,
  id,
  max,
}: TProductsRecords) => {
  const dispatch = useAppDispatch();

  const handleAddToCartClicked = () => {
    dispatch(addToCart(id));
  };
  console.log(max);

  return (
    <div className={`${product_card}`}>
      <div className="px-3 pt-4 pb-3">
        <h2 className="h5 m-0">{title}</h2>
        <h3 className="h6 my-3">Category : {cat_prefix}</h3>
        <h4 className="h6 m-0">price : {price}</h4>
      </div>
      <img className={product_img} src={img} alt={title} />
      <button
        onClick={handleAddToCartClicked}
        className={`w-100 rounded-0 ${add_to_cart_btn}`}
      >
        Add To Cart <BsCartPlusFill className="h4 m-0" />
      </button>
    </div>
  );
};

export default Product;
