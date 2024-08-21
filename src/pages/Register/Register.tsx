import RegisterForm from "@components/forms/RegisterForm";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { Col, Container, Row } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <PageTitle title="Register" />

      <Row className="justify-content-center my-3 ">
        <Col md="6" lg="5">
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
