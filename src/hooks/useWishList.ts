import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";

import { clearWishListProductsFullInfo } from "@store/wishList/WishListSlice";
import getWishListFullInfo from "@store/wishList/thunks/GetWishListFullInfoThunk";

const useWishList = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const {
    items: wishListItems,
    productsFullInfo,
    loading,
    error,
  } = useAppSelector((state) => state.wishList);

  const productsMergedWithQuantity = productsFullInfo.map((pro) => ({
    ...pro,
    quantity: cartItems[pro.id] || 0,
  }));

  useEffect(() => {
    const promise = dispatch(getWishListFullInfo());
    return () => {
      dispatch(clearWishListProductsFullInfo());
      promise.abort();
    };
  }, [dispatch, wishListItems.length]);

  return { productsMergedWithQuantity, loading, error, wishListItems };
};

export default useWishList;
