import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel
      touch={true}
      style={{
        marginTop: "-14px",
        height: "84svh",
        background: "rgba(0, 0, 0, 0.35)",
      }}
    >
      <Carousel.Item>
        <img
          style={{ height: "84svh" }}
          fetchPriority="high"
          className="d-block w-100 object-fit-cover"
          src="https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-125567.jpg?t=st=1732087749~exp=1732091349~hmac=77edc3f83eb98cb49c09377225d8f0dfdbd86ebb7c7ed3022065bd87d28a2986&w=1060"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "84svh" }}
          fetchPriority="high"
          className="d-block w-100 object-fit-cover"
          src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?t=st=1732087832~exp=1732091432~hmac=7c0b1ba3dfd8c8a060325c1a52269daa33b2447f924c883c72ca7198d3f6e9cf&w=1060"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "84svh" }}
          fetchPriority="high"
          className="d-block w-100 object-fit-cover"
          src="https://img.freepik.com/free-photo/young-handsome-man-choosing-cloth-shop_1303-19845.jpg?t=st=1732087867~exp=1732091467~hmac=5b812c3fe8e2d4ffdd4175235bd881234119bffc4f3473a36b5adb17fcb53832&w=1060"
          alt="third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
