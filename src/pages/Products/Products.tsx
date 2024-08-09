import Product from "@components/eCommerce/Product/Product";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { clearProducts, getProducts } from "@store/productsSlice/productsSlice";
import { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const productsWithFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  const { cat_prefix } = useParams();

  useEffect(() => {
    if (cat_prefix && typeof cat_prefix === "string")
      dispatch(getProducts(cat_prefix));
  }, [dispatch, cat_prefix]);

  useEffect(() => {
    dispatch(clearProducts());
  }, [dispatch]);

  const productsList = productsWithFullInfo.map((record) => (
    <Col className="my-3" key={record.id} xs={10} sm={8} md={6} lg={4} xl={3}>
      <Product {...record} />
    </Col>
  ));

  return (
    <Container>
      <PageTitle className={"mb-3"}>{cat_prefix} Products</PageTitle>
      <IsLoadingOrError error={error} loading={loading}>
        {productsWithFullInfo.length ? (
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
