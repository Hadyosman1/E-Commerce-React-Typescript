import Loading from "@components/feedback/Loading/Loading";
import AllProducts from "@components/home/AllProducts";
import HomeCarousel from "@components/home/HomeCarousel";
import PageTitle from "@components/shared/PageTitle/PageTitle";
import { Suspense } from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <main>
      <HomeCarousel />
      <Container className="py-5">
        <PageTitle title="All Products" className="mb-3" />

        <Suspense fallback={<Loading />}>
          <AllProducts />
        </Suspense>
      </Container>
    </main>
  );
};

export default Home;
