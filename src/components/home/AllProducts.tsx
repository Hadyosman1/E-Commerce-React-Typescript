import Product from "@components/eCommerce/Product/Product";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import useAllProducts from "@hooks/useAllProducts";

import Lottie from "lottie-react";

import emptyLottie from "@assets/lottie-files/empty-cart.json";
import { Alert, Col, Row } from "react-bootstrap";

const AllProducts = () => {
  const { productsWithFullInfo, error, loading, wishListItems } =
    useAllProducts();

  return (
    <IsLoadingOrError loading={loading} error={error}>
      {productsWithFullInfo.length > 0 ? (
        <Row className="justify-content-center">
          {productsWithFullInfo.map((record) => (
            <Col
              key={record.id}
              className="my-3"
              xs={10}
              sm={8}
              md={6}
              lg={4}
              xl={3}
            >
              <Product
                isInWishList={wishListItems.includes(record.id)}
                {...record}
              />
            </Col>
          ))}
        </Row>
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
            There are no products..!
          </Alert>
        </>
      )}
    </IsLoadingOrError>
  );
};

export default AllProducts;
