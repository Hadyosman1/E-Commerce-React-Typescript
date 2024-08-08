import Category from "@components/eCommerce/Category/Category";
import Loading from "@components/shared/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { getCategories } from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const { records, loading /*, error*/ } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!records.length) dispatch(getCategories());
  }, [dispatch, records.length]);

  const categoriesList = records.map((record) => (
    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={record.id} className="py-1">
      <Category {...record} />
    </Col>
  ));

  return (
    <Container>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <Row className="justify-content-around">{categoriesList}</Row>
      )}
    </Container>
  );
};

export default Categories;
