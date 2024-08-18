import Product from "@components/eCommerce/Product/Product";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";

import getWishListFullInfo from "@store/wishList/thunks/GetWishListFullInfoThunk";
import { clearWishListProductsFullInfo } from "@store/wishList/WishListSlice";
import { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const WishList = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.wishList
  );

  const productsMergedWithQuantity = productsFullInfo
    .map((pro) => ({
      ...pro,
      quantity: cartItems[pro.id] || 0,
    }))
    .map((pro) => (
      <Col key={pro.id} className="my-3" xs={10} sm={8} md={6} lg={4} xl={3}>
        <Product isInWishList={items.includes(pro.id)} {...pro} />
      </Col>
    ));

  useEffect(() => {
    dispatch(getWishListFullInfo());
    return () => {
      dispatch(clearWishListProductsFullInfo());
    };
  }, [dispatch, items.length]);

  return (
    <Container as="main">
      <PageTitle className={"mb-3"}>Your wish list</PageTitle>
      <IsLoadingOrError error={error} loading={loading}>
        {productsMergedWithQuantity.length ? (
          <Row className="justify-content-center">
            {productsMergedWithQuantity}
          </Row>
        ) : (
          <Alert
            variant="success"
            className="mt-3 fw-semibold text-dark text-center "
          >
            There are no products in your wish list..!
          </Alert>
        )}
      </IsLoadingOrError>
    </Container>
  );
};

export default WishList;
