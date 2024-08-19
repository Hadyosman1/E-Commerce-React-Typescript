import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import {
  ClearProductsFullInfoFromCart,
  getCartItemsInfo,
} from "@store/cartSlice/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo, items, error, loading } = useAppSelector(
    (state) => state.cart
  );
  console.log(error);
  const mergedProductsWithQuantity = productsFullInfo.map((pro) => ({
    ...pro,
    quantity: items[pro.id],
  }));

  const totalPrice = mergedProductsWithQuantity.reduce(
    (acc, curr) => acc + parseFloat(curr.price) * (curr.quantity ?? 0),
    0
  );

  useEffect(() => {
    const promise = dispatch(getCartItemsInfo());

    return () => {
      dispatch(ClearProductsFullInfoFromCart());
      promise.abort();
    };
  }, [dispatch]);

  return { dispatch, totalPrice, mergedProductsWithQuantity, error, loading };
};

export default useCart;
