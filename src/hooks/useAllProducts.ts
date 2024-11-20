import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { getAllProducts } from "@store/productsSlice/thunks/getAllProducts";
import { useEffect } from "react";
import { TProductsRecords } from "@types";

export default function useAllProducts() {
  const dispatch = useAppDispatch();
  const { allRecords, loading, error } = useAppSelector(
    (state) => state.products
  );
  const wishListItems = useAppSelector((state) => state.wishList.items);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsWithFullInfo: TProductsRecords[] = allRecords.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return { productsWithFullInfo, wishListItems, loading, error };
}
