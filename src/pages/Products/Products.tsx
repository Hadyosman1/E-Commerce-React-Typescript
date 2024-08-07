import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { getProducts } from "@store/productsSlice/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

//icons
import { BsCartPlusFill } from "react-icons/bs";

//styles
import styles from "./styles.module.css";
const { product_img, product_card, add_to_cart_btn } = styles;

const Products = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const { cat_prefix } = useParams();

  console.log(records);
  useEffect(() => {
    if (cat_prefix && typeof cat_prefix === "string")
      dispatch(getProducts(cat_prefix));
  }, [dispatch, cat_prefix]);

  const productsList = records.map((record) => (
    <Col className="my-2" key={record.id} xs={10} sm={8} md={6} lg={4}>
      <div className={`${product_card}`}>
        <div className="px-3 pt-4 pb-3">
          <h2 className="h5 m-0">{record.title}</h2>
          <h3 className="h6 my-3">Category : {record.cat_prefix}</h3>
          <h4 className="h6 m-0">price : {record.price}</h4>
        </div>
        <img className={product_img} src={record.img} alt={record.title} />
        <button className={`w-100 rounded-0 ${add_to_cart_btn}`}>
          Add To Cart <BsCartPlusFill className="h4 m-0" />
        </button>
      </div>
    </Col>
  ));

  return (
    <Container>
      {loading === "pending" ? (
        "loading..."
      ) : (
        <Row className="justify-content-center">{productsList}</Row>
      )}
    </Container>
  );
};

export default Products;
