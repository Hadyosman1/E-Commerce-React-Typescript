import Lottie from "lottie-react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundLottie from "@assets/lottie-files/not-found.json";

const ErrorPage = () => {
  return (
    <Container
      as="main"
      className="min-h-svh d-flex flex-column justify-content-center align-items-center  "
    >
      <Lottie
        animationData={notFoundLottie}
        style={{ width: "clamp(280px,600px,100%)", height: "400px",pointerEvents:"none" }}
      />
      <h1 style={{marginTop:"-100px"}}>404 | Not Found</h1>
      <Link replace={true} to="/">
        <Button variant="secondary">Home</Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
