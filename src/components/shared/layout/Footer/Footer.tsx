import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer" className="mt-auto ">
      <div className="border-top">
        <Container>
          <Row className="justify-content-center py-3">
            All Rights Reserverd &copy; {new Date().getFullYear()}
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
