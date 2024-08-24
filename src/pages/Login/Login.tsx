import LoginForm from "@components/forms/LoginForm";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { useAppSelector } from "@hooks/reduxHooks";
import { useEffect, useLayoutEffect } from "react";

import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const { accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setSearchParam("");
    };
  }, [setSearchParam]);

  useLayoutEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <Container>
      <PageTitle title="Login" />
      <Row className="justify-content-center my-3 ">
        <Col md="6" lg="5">
          {searchParam.get("message") === "account_created" && (
            <Alert dismissible={true} variant="success">
              Account created successfully , now you can login
            </Alert>
          )}

          {searchParam.get("message") === "login_required" && (
            <Alert dismissible={true} variant="warning">
              You must login first
            </Alert>
          )}

          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
