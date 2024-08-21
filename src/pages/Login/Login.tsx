import LoginForm from "@components/forms/LoginForm";
import PageTitle from "@components/shared/PageTitle/PageTitle";

import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <PageTitle title="Login" />

      <Row className="justify-content-center my-3 ">
        <Col md="6" lg="5">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
