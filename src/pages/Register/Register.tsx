import RegisterForm from "@components/forms/RegisterForm";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "@hooks/reduxHooks";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (accessToken) {
    return <Navigate to="/" />;
  }

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
