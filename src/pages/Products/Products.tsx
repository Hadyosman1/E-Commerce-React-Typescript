import Product from "@components/eCommerce/Product/Product";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import useProducts from "@hooks/useProducts";

import { Alert, Col, Container, Row } from "react-bootstrap";

const Products = () => {
  console.log("products");
  const { productsWithFullInfo, wishListItems, loading, error, cat_prefix } =
    useProducts();

  const productsList = productsWithFullInfo.map((record) => (
    <Col key={record.id} className="my-3" xs={10} sm={8} md={6} lg={4} xl={3}>
      <Product isInWishList={wishListItems.includes(record.id)} {...record} />
    </Col>
  ));

  return (
    <Container as="main">
      <PageTitle title={`${cat_prefix} Products`} className={"mb-3"} />
      <IsLoadingOrError error={error} loading={loading}>
        {productsList.length ? (
          <Row className="justify-content-center">{productsList}</Row>
        ) : (
          <Alert
            variant="success"
            className="mt-3 fw-semibold text-dark text-center "
          >
            There are no products..!
          </Alert>
        )}
      </IsLoadingOrError>
    </Container>
  );
};

export default Products;
