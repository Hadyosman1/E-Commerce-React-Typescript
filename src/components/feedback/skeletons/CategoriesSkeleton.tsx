import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  return (
    <Row className="justify-content-around">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Col
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            className="py-1 d-flex justify-content-center"
          >
            <ContentLoader
              speed={2}
              width={200}
              height={200}
              viewBox="0 0 200 200"
              backgroundColor="#c7c7c7"
              foregroundColor="#dcdbdb"
            >
              <rect x="0" y="0" rx={10} ry={10} width="200" height="200" />
            </ContentLoader>
          </Col>
        ))}
    </Row>
  );
};

export default CategorySkeleton;
