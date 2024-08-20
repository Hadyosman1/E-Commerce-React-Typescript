import ContentLoader from "react-content-loader";
import { Col, Row } from "react-bootstrap";

const ProductsSkeleton = () => (
  <Row className="justify-content-center">
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <Col
          key={i}
          className="my-3 justify-content-center"
          xs={10}
          sm={8}
          md={6}
          lg={4}
          xl={3}
        >
          <ContentLoader
            speed={2}
            viewBox="0 0 300 397"
            backgroundColor="#e0e0e0"
            foregroundColor="#d4d4d4"
          >
            <rect x="0" y="0" rx="15" ry="15" width="300" height="397" />
          </ContentLoader>
        </Col>
      ))}
  </Row>
);

export default ProductsSkeleton;
