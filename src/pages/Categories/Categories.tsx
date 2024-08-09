import Category from "@components/eCommerce/Category/Category";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { getCategories } from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const { records, loading, error } = useAppSelector(
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
      <PageTitle className="mb-3">Categories</PageTitle>
      <IsLoadingOrError error={error} loading={loading}>
        {categoriesList.length ? (
          <Row className="justify-content-around">{categoriesList}</Row>
        ) : (
          <Alert
            variant="success"
            className="mt-3 fw-semibold text-dark text-center "
          >
            There are no categories..!
          </Alert>
        )}
      </IsLoadingOrError>
    </Container>
  );
};

export default Categories;
