import { TProductsRecords } from "@types";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { clearProducts, getProducts } from "@store/productsSlice/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const wishListItems = useAppSelector((state) => state.wishList.items);

  const cartItems = useAppSelector((state) => state.cart.items);
  const productsWithFullInfo: TProductsRecords[] = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  const { cat_prefix } = useParams();

  useEffect(() => {
    const promise = dispatch(getProducts(cat_prefix as string));

    return () => {
      dispatch(clearProducts());
      promise.abort();
    };
  }, [dispatch, cat_prefix]);

  return { productsWithFullInfo, wishListItems, loading, error, cat_prefix };
};

export default useProducts;
