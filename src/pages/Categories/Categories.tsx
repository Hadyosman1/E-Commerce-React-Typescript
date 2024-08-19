import Category from "@components/eCommerce/Category/Category";
import IsLoadingOrError from "@components/shared/IsLoadingOrError/IsLoadingOrError";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import useCategories from "@hooks/useCategories";

import { Alert, Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const { loading, error, records } = useCategories();

  const categoriesList = records.map((record) => (
    <Col key={record.id} xs={12} sm={6} md={4} lg={3} xl={2} className="py-1">
      <Category {...record} />
    </Col>
  ));

  return (
    <Container>
      <PageTitle title="Categories" className="mb-3" />
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
