import CartItem from "@components/eCommerce/CartItem/CartItem";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import useCart from "@hooks/useCart";
import CartItemsSkeleton from "@components/feedback/skeletons/CartItemsSkeleton";
import Lottie from "lottie-react";
import emptyLottie from "@assets/lottie-files/empty-cart.json";

import { clearCart } from "@store/cartSlice/cartSlice";

import { Alert, Button, Container, Stack } from "react-bootstrap";

// icons
import { BiSmile, BiTrash } from "react-icons/bi";

const Cart = () => {
  const { dispatch, totalPrice, mergedProductsWithQuantity, error, loading } =
    useCart();

  const cartItemsList = mergedProductsWithQuantity.map((pro) => (
    <CartItem key={pro.id} {...pro} />
  ));

  return (
    <Container as={"main"}>
      <IsLoadingOrError
        error={error}
        loading={loading}
        loadingIndicator={<CartItemsSkeleton />}
      >
        {mergedProductsWithQuantity.length ? (
          <>
            <div className="d-flex align-items-center mb-4">
              <PageTitle title="Cart" />
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
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <Lottie
                animationData={emptyLottie}
                style={{ width: "clamp(280px,500px,100%)" }}
              />
            </div>
            <Alert
              variant="success"
              className="mt-3 fw-semibold text-dark text-center "
            >
              Your cart is empty..! <BiSmile className="fs-4 mb-1" />
            </Alert>
          </>
        )}
      </IsLoadingOrError>
    </Container>
  );
};

export default Cart;
