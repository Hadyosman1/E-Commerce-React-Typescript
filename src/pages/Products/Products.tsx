import Product from "@components/eCommerce/Product/Product";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { clearProducts, getProducts } from "@store/productsSlice/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const { records, loading /*, error*/ } = useAppSelector(
    (state) => state.products
  );
  const { cat_prefix } = useParams();

  useEffect(() => {
    if (cat_prefix && typeof cat_prefix === "string")
      dispatch(getProducts(cat_prefix));
  }, [dispatch, cat_prefix]);

  useEffect(() => {
    dispatch(clearProducts());
  }, [dispatch]);

  const productsList = records.map((record) => (
    <Col className="my-3" key={record.id} xs={10} sm={8} md={6} lg={4} xl={3}>
      <Product {...record} />
    </Col>
  ));

  return (
    <Container>
      {loading === "pending" ? (
        "loading..."
      ) : (
        <Row className="justify-content-center">{productsList}</Row>
      )}
    </Container>
  );
};

export default Products;
