const About = () => {
  return (
    <section className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="about-text-column bg-dark text-white col-lg-6">
            <div className="about-text p-4">
              <h6 className="text-uppercase text-muted letter-spacing-5 mb-1">
                Humble beginnings
              </h6>
              <h2 className="mb-4">We started small</h2>
              <p className="text-light">
                Our journey began with a passion for quality and service. From
                the first steps, we aimed to bring the best products to our
                customers.
              </p>
            </div>
          </div>
          <div className="about-image-column col-lg-6">
            <img
              src="https://img.freepik.com/free-photo/blurred-clothing-store-shopping-mall_1258-5.jpg?t=st=1732087676~exp=1732091276~hmac=f7d4f2b9b150604bbe057a9d468a35a23a06b50e70cd30311089c8a45894c0df&w=1060"
              alt="Starting e-commerce business"
              className="w-100"
            />
          </div>
        </div>
        <div className="row">
          <div className="about-image-column order-lg-1 col-lg-6">
            <img
              src="https://img.freepik.com/free-photo/abstract-blur-defocused-shopping-mall_1203-9548.jpg?t=st=1732087695~exp=1732091295~hmac=59618c357e9bf408631ba1594b445746465247e9620748a1a34c2b3dc404e97c&w=1060"
              alt="E-commerce growth"
              className="w-100"
            />
          </div>
          <div className="about-text-column bg-dark text-white order-lg-2 col-lg-6">
            <div className="about-text p-4">
              <h6 className="text-uppercase text-muted letter-spacing-5 mb-1">
                Growth and innovation
              </h6>
              <h2 className="mb-4">And then we grew</h2>
              <p className="text-light">
                Through dedication and innovation, we expanded to serve
                thousands of customers, offering more products and better
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
