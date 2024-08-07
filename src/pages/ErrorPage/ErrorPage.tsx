import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container
      as="main"
      className="min-h-svh d-flex flex-column justify-content-center align-items-center gap-2 "
    >
      <div className="d-flex align-items-center gap-2 ">
        <h1>404 | ErrorPage</h1>
      </div>
      <Link replace={true} to="/">
        <Button variant="secondary">Home</Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
