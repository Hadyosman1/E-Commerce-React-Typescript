import { useEffect } from "react";
import CartItem from "@components/eCommerce/CartItem/CartItem";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import {
  ClearProductsFullInfoFromCart,
  getCartItemsInfo,
  clearCart,
} from "@store/cartSlice/cartSlice";

import { Alert, Button, Container, Stack } from "react-bootstrap";

// icons
import { BiSmile, BiTrash } from "react-icons/bi";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo, items, error, loading } = useAppSelector(
    (state) => state.cart
  );

  const mergedProductsWithQuantity = productsFullInfo.map((pro) => ({
    ...pro,
    quantity: items[pro.id],
  }));

  const totalPrice = mergedProductsWithQuantity.reduce(
    (acc, curr) => acc + parseFloat(curr.price) * (curr.quantity ?? 0),
    0
  );

  useEffect(() => {
    dispatch(getCartItemsInfo());

    return () => {
      dispatch(ClearProductsFullInfoFromCart());
    };
  }, [dispatch]);

  const cartItemsList = mergedProductsWithQuantity.map((pro) => (
    <CartItem key={pro.id} {...pro} />
  ));

  return (
    <Container as={"main"}>
      {mergedProductsWithQuantity.length ? (
        <IsLoadingOrError error={error} loading={loading}>
          <div className="d-flex align-items-center mb-4">
            <PageTitle>Cart</PageTitle>
            <Button
              onClick={() => dispatch(clearCart())}
              className="ms-auto"
              variant="danger"
              size="sm"
            >
              <BiTrash className="mb-1" /> Clear all
            </Button>
          </div>

          <Stack className="list-unstyled" as={"ul"} gap={4}>
            {cartItemsList}
          </Stack>
          <p
            className={`p-2 h6 fw-bold text-center bg-cus-primary rounded-1 shadow-lg`}
          >
            Total Price {"<<"} {totalPrice.toFixed(2)} EGP {">>"}
          </p>
        </IsLoadingOrError>
      ) : (
        <Alert
          variant="success"
          className="mt-3 fw-semibold text-dark text-center "
        >
          Your cart is empty..! <BiSmile className="fs-4 mb-1" />
        </Alert>
      )}
    </Container>
  );
};

export default Cart;
