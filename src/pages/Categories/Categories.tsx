import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { getCategories } from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//icons
import { GiClick } from "react-icons/gi";

//styles
import styles from "./styles.module.css";
const { category_card, img_container, title, click_icon } = styles;

const Categories = () => {
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!records.length) dispatch(getCategories());
  }, [dispatch, records.length]);

  const categoriesList = records.map((record) => (
    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={record.id} className="py-1">
      <div className={`py-1 ${category_card}`}>
        <Link to={`/products/${record.prefix}`}>
          <div className={`${img_container} `}>
            <img alt={record.title} src={record.img} />
            <h2 className={`h4 m-0 ${title}`}>{record.title}</h2>
            <span className={click_icon}>
              <GiClick />
            </span>
          </div>
        </Link>
      </div>
    </Col>
  ));

  return (
    <Container>
      {loading === "pending" ? (
        "loading..."
      ) : (
        <Row className=" justify-content-around">{categoriesList}</Row>
      )}
    </Container>
  );
};

export default Categories;
