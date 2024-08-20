import Product from "@components/eCommerce/Product/Product";
import ProductsSkeleton from "@components/feedback/skeletons/ProductsSkeleton";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import Lottie from "lottie-react";
import emptyLottie from "@assets/lottie-files/empty-cart.json";

import useWishList from "@hooks/useWishList";

import { Alert, Col, Container, Row } from "react-bootstrap";

const WishList = () => {
  const { error, loading, productsMergedWithQuantity, wishListItems } =
    useWishList();

  const wishListProducts = productsMergedWithQuantity.map((pro) => (
    <Col key={pro.id} className="my-3" xs={10} sm={8} md={6} lg={4} xl={3}>
      <Product isInWishList={wishListItems.includes(pro.id)} {...pro} />
    </Col>
  ));

  return (
    <Container as="main">
      <PageTitle title="Your wish list" className={"mb-3"} />
      <IsLoadingOrError
        error={error}
        loading={loading}
        loadingIndicator={<ProductsSkeleton />}
      >
        {wishListProducts.length ? (
          <Row className="justify-content-center">{wishListProducts}</Row>
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
              There are no products in your wish list..!
            </Alert>
          </>
        )}
      </IsLoadingOrError>
    </Container>
  );
};

export default WishList;
