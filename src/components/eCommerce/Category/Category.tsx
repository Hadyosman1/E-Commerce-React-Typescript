import { Link } from "react-router-dom";

//icons
import { GiClick } from "react-icons/gi";

//styles
import styles from "./styles.module.css";
import TCategoriesRecords from "@customTypes/categoriesTypes/categoriesRecordsType";
const { category_card, img_container, title: title_style, click_icon } = styles;

const Category = ({ title, img, prefix }: TCategoriesRecords) => {
  return (
    <div className={`py-1 ${category_card}`}>
      <Link to={`/products/${prefix}`}>
        <div className={`${img_container} `}>
          <img alt={title} src={img} />
          <h2 className={`h4 m-0 ${title_style}`}>{title}</h2>
          <span className={click_icon}>
            <GiClick />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Category;
